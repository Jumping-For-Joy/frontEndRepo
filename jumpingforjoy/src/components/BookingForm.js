import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
import EnquiryBookingForm from './EnquiryBookingForm'
import {createBooking} from '../services/bookingServices'
import {useGlobalState} from '../utils/stateContext'

const BookingForm = () => {
    const location = useLocation()
    // inherit enquiry from previous component state
    const {enquiry} = location.state
    const [submitted, setSubmitted] = useState(false)
    const {store} = useGlobalState()
    const {loggedInUser} = store


    function getEndTime(startTime, duration) {
        let start = new Date(startTime)
        let hours = parseInt(duration)
        let endTime = new Date(new Date(start).setHours(start.getHours() + hours))
        return endTime
    }

    function handleSubmit(submittedData) {
        createBooking({
            ...submittedData,
            customer_id: enquiry.customer_id,
            end_time: getEndTime(submittedData.start_time, submittedData.duration), 
            castle_id: enquiry.castle_id,
            enquiry_id: enquiry.id
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        setSubmitted(true)
    }

    return (
        <>
            {loggedInUser && 
            <>
                <h3>Booking details</h3>
                    <EnquiryBookingForm handleSubmit={handleSubmit} existingData={enquiry}/>
                    {submitted && <p>Booking submitted!</p>}
            </>
            }
        </>
    )
}

export default BookingForm;