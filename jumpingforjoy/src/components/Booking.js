import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getBooking} from '../services/bookingServices'
import {getCastle} from '../services/castleServices';
import {getCustomer} from '../services/customerServices';

const Booking = () => {
    const [booking, setBooking] = useState({})
    const [customer, setCustomer] = useState({})
    const [castle, setCastle] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getBooking(id)
        .then((booking) => {
            setBooking(booking)
            getCustomer(booking.customer_id)
            .then((customer) => setCustomer(customer))
            .catch((error) => console.log('customer retrieval error:', error))
            getCastle(booking.castle_id)
            .then((castle) => setCastle(castle))
            .catch((error) => console.log('castle retrieval error:', error))
        })
        .catch((error) => console.log('booking retrieval error:', error))
    }, [id])

    // so the date is output in an easy to read way
    function formatDateForUser(date) {
        let readableDate = new Date(date).toLocaleString('en-GB', {hour12: true})
        return readableDate
    }
    
    return (
        <div>
            <h3>Confirmed Booking #{booking.id}</h3>
            <p>Name: {customer.name}</p>
            <p>Castle: {castle.name}</p>
            <p>Booking start: {formatDateForUser(booking.start_time)}</p>
            <p>Hire period: {booking.duration} hours</p>
            <p>{booking.terms_agreement ? "Agreed" : "Has not yet agreed" } to terms.</p>
            <p>{booking.paid ? "Paid" : "Not yet paid" }.</p>
            <p>{booking.notes}</p>
            {/* <Link to={`/bookings/${booking.id}/manage`}>Manage booking</Link> */}
            <Link
                to={`/bookings/${booking.id}/manage`}
                state={{ booking }}
                >
                Manage booking
            </Link>
        </div>
    )
}

export default Booking;