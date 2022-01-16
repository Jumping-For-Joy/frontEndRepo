import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {createEnquiry} from '../services/enquiryServices';
import EnquiryBookingForm from './EnquiryBookingForm';
import { send } from 'emailjs-com'

// To create a new enquiry after filling out the customer form
const EnquiryForm = ({customerId, castleId}) => {
    // state to let user know form was successfully submitted
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    function getEndTime(startTime, duration) {
        let start = new Date(startTime)
        let hours = parseInt(duration)
        let endTime = new Date(new Date(start).setHours(start.getHours() + hours))
        console.log('endtime >', endTime)
        return endTime
    }

    function handleSubmit(submittedData) {
        let toSend = {
            name: submittedData.name,
            email: submittedData.email
        }
        send(
            'service_pg2sub6',
            'template_q36pgok',
            toSend,
            'user_S9AiTaOU1MdtdbtSuNLB0'
            )
            .then((response) => {
                console.log('email sent successfully!', response.status, response.text);
            })
            .catch((error) => console.log('email send error', error))
        console.log('to send >', toSend)
        createEnquiry({
            ...submittedData,
            customer_id: customerId,
            end_time: getEndTime(submittedData.start_time, submittedData.duration), 
            castle_id: castleId
        })
        .then(navigate(`/confirmation`))
        .catch((error) => console.log(error))
        setSubmitted(true)
    }

    return (
        <div>
            {/* only render the form once castleId and customerId have been set */}
            {castleId && customerId && 
            <>
                <h3>Booking Request Details</h3>
                <EnquiryBookingForm handleSubmit={handleSubmit} />
            </>
            }
                {submitted && <p>Booking request successfully submitted!</p>}

        </div>
    )
}

export default EnquiryForm;
