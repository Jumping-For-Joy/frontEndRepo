import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCustomer } from '../services/customerServices'
import { Card } from '../styled/admin'
import Loading from './Loading'

const AllBookings = ({bookings}) => {
    return (
        <div>
            {bookings.map((booking) => {
                return (
                    <BookingItem key={booking.id} booking={booking} />
                )
            })}
        </div>
    )
}

const BookingItem = ({booking}) => {
    const [customer, setCustomer] = useState()

    useEffect(() => {
        getCustomer(booking.customer_id)
        .then(response => setCustomer(response))
        .catch(console.error)
    }, [booking.customer_id])

    return (
        <Card>
            {customer ? 
            <>
                <Link to={`/bookings/${booking.id}`}>
                    <h3>Booking #{booking.id}</h3>
                </Link>
                <p>{customer.name}</p>
            </>
            :
            <Loading />
            }
        </Card>
    )
}

export default AllBookings;