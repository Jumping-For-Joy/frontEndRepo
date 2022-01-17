import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getCastle } from '../services/castleServices';
import { getCustomer } from '../services/customerServices';
import { getEnquiry } from '../services/enquiryServices'
import { Card, StyledLink } from '../styled/shared/booking-enquiry'
import Loading from './Loading'
import moment from 'moment'

const Enquiry = () => {
    const [enquiry, setEnquiry] = useState({})
    const [customer, setCustomer] = useState({})
    const [castle, setCastle] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        getEnquiry(id)
        .then((enquiry) => {
            setEnquiry(enquiry)
            getCustomer(enquiry.customer_id)
            .then((customer) => setCustomer(customer))
            .catch((error) => console.log('customer retrieval error:', error))
            getCastle(enquiry.castle_id)
            .then((castle) => setCastle(castle))
            .catch((error) => console.log('castle retrieval error:', error))
            setEnquiry({
                ...enquiry,
                start_time: formatDateForForm(enquiry.start_time) 
            })
            setLoading(false)
        })
        .catch((error) => console.log('enquiry retrieval error:', error))
    }, [id])


    // not able to pre-fill the form with exisiting enquiry data without handling here first
    function formatDateForForm(date) {
        let readableDate = new Date(date).toISOString().slice(0, -8)
        return readableDate
    }

    return (
        <Card> {/*Card*/}
        { loading ?
        <Loading /> :
            <>
                <div>
                    <Link to='/admin'>Back to dashboard</Link>
                </div>
                <h3>Enquiry #{enquiry.id}</h3>
                    <p>{customer.name}</p>
                    <p>{customer.street_number} {customer.street_name}
                        <br></br>
                    {customer.suburb} {customer.postcode}</p>
                    <p>{moment.parseZone(enquiry.start_time).format('MMM Do YYYY, h:mm a')}</p>
                    <p>Hire period: {enquiry.duration} hours</p>
                    <p><Link to={`/castles/${castle.id}`}>{castle.name}</Link></p>
                    <p>{enquiry.terms_agreement ? "Agreed" : "Has not yet agreed" } to terms.</p>
                    <p>Notes: {enquiry.notes ? enquiry.notes : "No notes on this enquiry."}</p>
                    <StyledLink
                        to={`/enquiries/${enquiry.id}/manage`}
                        state={{ enquiry }}
                        >
                        Create booking
                    </StyledLink>
                </>
        }
        </Card>
    )
}

export default Enquiry;