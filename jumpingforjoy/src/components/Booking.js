import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getBooking} from '../services/bookingServices'
import {getCastle} from '../services/castleServices';
import {getCustomer} from '../services/customerServices';
import { Card, StyledLink } from '../styled/shared/booking-enquiry'
import { Div } from '../styled/booking'
import Loading from './Loading'
import moment from 'moment'

const Booking = () => {
    const [booking, setBooking] = useState({})
    const [customer, setCustomer] = useState({})
    const [castle, setCastle] = useState({})
    const [loading, setLoading] = useState(true)
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
            setLoading(false)
        })
        .catch((error) => console.log('booking retrieval error:', error))
    }, [id])

    return (
        <Div>
            { loading ? 
                <Loading /> :
                <div>
                    <Card>
                        <div>
                            <Link to='/admin'>Back to dashboard</Link>
                        </div>
                    <h3>Confirmed Booking #{booking.id}</h3>
                        <p>{customer.name}</p>
                        <p>{customer.street_number} {customer.street_name}
                            <br></br>
                        {customer.suburb} {customer.postcode}</p>
                        <p>{moment.parseZone(booking.start_time).format('MMM Do YYYY, h:mm a')}</p>
                        <p>Hire period: {booking.duration} hours</p>
                        <p><Link to={`/castles/${castle.id}`}>{castle.name}</Link></p>
                        <p>{booking.terms_agreement ? "Agreed" : "Has not yet agreed" } to terms.</p>
                        <p>{booking.paid ? "Deposit paid" : "Not yet paid" }.</p>
                        <p>Notes: {booking.notes ? booking.notes : "No notes on this booking."}</p>
                        <StyledLink
                            to={`/bookings/${booking.id}/manage`}
                            state={{ booking }}
                            >
                            Manage booking
                        </StyledLink>
                    </Card>
                </div>          
            }
        </Div>
    )
}

export default Booking;