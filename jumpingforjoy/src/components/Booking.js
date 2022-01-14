import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getBooking} from '../services/bookingServices'
import {getCastle} from '../services/castleServices';
import {getCustomer} from '../services/customerServices';
import {Card, StyledLink} from '../styled/shared/booking-enquiry'
import { Div } from '../styled/booking'

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
        <Div>
            {booking.id && customer.id &&  castle.id &&
                <div>
                    <Card>
                    <h3>Confirmed Booking #{booking.id}</h3>
                        <p>{customer.name}</p>
                        {/* <p>Booking delivery address:</p> */}
                        <p>{customer.street_number} {customer.street_name}
                            <br></br>
                        {customer.suburb} {customer.postcode}</p>
                        <p>{formatDateForUser(booking.start_time)}</p>
                        <p>Hire period: {booking.duration} hours</p>
                        <p><Link to={`/castles/${castle.id}`}>{castle.name}</Link></p>
                        <p>{booking.terms_agreement ? "Agreed" : "Has not yet agreed" } to terms.</p>
                        <p>{booking.paid ? "Deposit paid" : "Not yet paid" }.</p>
                        <p>Notes: {booking.notes ? booking.notes : "No notes on this booking."}</p>
                        {/* <Link to={`/bookings/${booking.id}/manage`}>Manage booking</Link> */}
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