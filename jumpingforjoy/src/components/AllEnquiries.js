import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Card } from '../styled/admin'
import { getCustomer } from '../services/customerServices'
import Loading from './Loading'

const AllEnquiries = ({enquiries}) => {
    return (
        <div>
            {enquiries.map((enquiry) => {
                return (
                    <EnquiryItem key={enquiry.id} enquiry={enquiry} />
                )
            })}
        </div>
    )
}

const EnquiryItem = ({enquiry}) => {
    const [customer, setCustomer] = useState()

    useEffect(() => {
        getCustomer(enquiry.customer_id)
        .then(response => setCustomer(response))
        .catch(console.error)
    }, [enquiry.customer_id])

    return (
        <Card>
            {customer ?
            <>
                <Link to={`/enquiries/${enquiry.id}`}>
                    <h3>Enquiry #{enquiry.id}</h3>
                </Link>
                <p>{customer.name}</p>
            </>
            : 
            <Loading />
            }
        </Card>
    )
}

export default AllEnquiries;