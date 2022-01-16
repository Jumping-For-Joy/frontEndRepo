import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getBookings} from '../services/bookingServices'
import {Card} from '../styled/admin'
import Loading from './Loading'

const AllBookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBookings()
        .then((response) => {
            setBookings([...bookings, ...response])
            setLoading(false)
        })
        .then(() => console.log('bookings', bookings))
        .catch((error) => console.log(error))
    },[])
 
    return (
        <div>
            { loading ? 
            <Loading /> :
            <>
                {bookings.map((booking, index) => {
                    return (
                        <Card key={booking.id}>
                            <Link key={booking.id} to={`/bookings/${booking.id}`}>
                                <h3>Booking #{booking.id}</h3>
                            </Link>
                        </Card>
                    )
                })}
            </>
            }


        </div>
    )
}

export default AllBookings;