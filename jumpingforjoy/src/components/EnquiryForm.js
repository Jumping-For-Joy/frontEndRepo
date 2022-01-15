import React, {useState} from 'react';
import {createEnquiry} from '../services/enquiryServices';
import EnquiryBookingForm from './EnquiryBookingForm';

// To create a new enquiry after filling out the customer form
const EnquiryForm = ({customerId, castleId}) => {
    // state to let user know form was successfully submitted
    const [submitted, setSubmitted] = useState(false)


    function getEndTime(startTime, duration) {
        let start = new Date(startTime)
        let hours = parseInt(duration)
        let endTime = new Date(new Date(start).setHours(start.getHours() + hours))
        console.log('endtime >', endTime)
        return endTime
    }

    function handleSubmit(submittedData) {
        createEnquiry({
            ...submittedData,
            customer_id: customerId,
            end_time: getEndTime(submittedData.start_time, submittedData.duration), 
            castle_id: castleId
        })
        .then((response) => console.log(response))
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
