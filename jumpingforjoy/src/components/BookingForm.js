import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import EnquiryBookingForm from './EnquiryBookingForm'
import {createBooking} from '../services/bookingServices'
import {useGlobalState} from '../utils/stateContext'

// create a new booking based off an enquiry
const BookingForm = () => {
    const location = useLocation()
    const navigate = useNavigate()
    // inherit enquiry from previous component state
    const {enquiry} = location.state
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
        .then((response) => navigate(`/bookings/${response.id}`))
        .catch((error) => console.log(error))
    }

    return (
        <>
            {loggedInUser && 
            <>
                <h3>Booking details</h3>
                <EnquiryBookingForm handleSubmit={handleSubmit} existingData={enquiry}/>
            </>
            }
        </>
    )
}

export default BookingForm;