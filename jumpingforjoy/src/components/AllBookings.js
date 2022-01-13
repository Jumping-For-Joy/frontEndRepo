import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getBookings} from '../services/bookingServices'
import {Card} from '../styled/admin'

const AllBookings = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings()
        .then((response) => setBookings([...bookings, ...response]))
        .then(() => console.log('bookings', bookings))
        .catch((error) => console.log(error))
    },[])
 
    return (
        <div>
            {bookings.map((booking, index) => {
                return (
                    <Card key={booking.id}>
                        <Link key={booking.id} to={`/bookings/${booking.id}`}>
                            <h3>{booking.customer_id}</h3>
                        </Link>
                            <p>Paid: {booking.paid}</p>
                            <p>Start: {booking.start_time}</p>
                            <p>Duration: {booking.duration}</p>
                            <p>Terms agreement:{booking.terms_agreement}</p>
                            <p>Castle: {booking.castle_id}</p>
                            <p>Notes: {booking.notes}</p>
                            <p>Total: {booking.total}</p>
                            {/* Approve or edit request goes here */}
                    </Card>
                )
            })}


        </div>
    )
}

export default AllBookings;