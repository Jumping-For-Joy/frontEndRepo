import React from 'react'
import {updateBooking} from '../services/bookingServices'
import {useLocation, useParams, useNavigate} from 'react-router-dom'
import EnquiryBookingForm from './EnquiryBookingForm'

// update a confirmed booking
const EditBooking = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {booking} = location.state
    const {id} = useParams()
    console.log('booking id >', booking.id)

    function handleSubmit(submittedForm) {
        updateBooking(submittedForm)
        .then((response) => {
            console.log(response)
            navigate(`/bookings/${response.id}`)
            })
        .catch((error) => console.log('update booking error ->', error))
    }

    return (
        <>
            <EnquiryBookingForm handleSubmit={handleSubmit} existingData={booking} />
        </>
    )
}

export default EditBooking;