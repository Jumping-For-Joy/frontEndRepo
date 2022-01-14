import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getCastle} from '../services/castleServices';
import {getCustomer} from '../services/customerServices';
import {getEnquiry} from '../services/enquiryServices'
import { Form } from '../styled/shared/forms'

const Enquiry = () => {
    const [enquiry, setEnquiry] = useState({})
    const [customer, setCustomer] = useState({})
    const [castle, setCastle] = useState({})
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
        })
        .catch((error) => console.log('enquiry retrieval error:', error))
        .finally(() => setEnquiry({
            ...enquiry,
            start_time: formatDateForForm(enquiry.start_time)
        }))
    }, [id])

    // so the date is output in an easy to read way
    function formatDateForUser(date) {
        let readableDate = new Date(date).toLocaleString('en-GB', {hour12: true})
        return readableDate
    }

    // not able to pre-fill the form with exisiting enquiry data without handling here first
    function formatDateForForm(date) {
        let readableDate = new Date(date).toISOString().slice(0, -8)
        return readableDate
    }

    return (
        
            <Form>
                <h3>Booking request #{enquiry.id}</h3>
                <p>Name: {customer.name}</p>
                <p>Castle: {castle.name}</p>
                <p>Booking start: {formatDateForUser(enquiry.start_time)}</p>
                <p>Duration: {enquiry.duration} hours</p>
                <p>{enquiry.terms_agreement ? "✅ Agreed" : "⛔️ Has not yet agreed" } to terms.</p>
                <p>{enquiry.paid ? "✅ Paid" : "⛔️ Not yet paid" }.</p>
                {/* <Link to={`/enquiries/${enquiry.id}/manage`}>Manage enquiry</Link> */}
                <Link
                    to={`/enquiries/${enquiry.id}/manage`}
                    state={{ enquiry }}
                    >
                    Create booking
                </Link>
            </Form>
        
    )
}

export default Enquiry;