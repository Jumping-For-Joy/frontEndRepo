import React from 'react'
import {updateBooking} from '../services/bookingServices'
import {useLocation, useParams} from 'react-router-dom'
import EnquiryBookingForm from './EnquiryBookingForm'

const EditBooking = () => {
    const location = useLocation()
    const {booking} = location.state
    const {id} = useParams()

    function handleSubmit(submittedForm) {
        updateBooking({
            ...submittedForm,
            id: id
        })
        .then((response) => console.log(response))
        .catch((error) => console.log('update booking error ->', error))
    }

    return (
        <>
            <EnquiryBookingForm handleSubmit={handleSubmit} existingData={booking} />
        </>
    )
}

export default EditBooking;