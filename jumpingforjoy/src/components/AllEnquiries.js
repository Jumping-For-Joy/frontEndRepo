import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {getEnquiries} from '../services/enquiryServices'
import {Card} from '../styled/admin'

const AllEnquiries = () => {
    const [enquiries, setEnquiries] = useState([])

    useEffect(() => {
        getEnquiries()
        .then((response) => {
            setEnquiries([...enquiries, ...response])
            console.log('response >', response, 'enquiries >', enquiries)
        })
        // .then((response) => console.log('enquiries response >', response, 'enquiries', enquiries))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            {enquiries.sort((a, b) => a.id > b.id ? 1:-1).map((enquiry, index) => {
                return (
                    <Card key={enquiry.id}>
                        <Link key={enquiry.id} to={`/enquiries/${enquiry.id}`}>
                            <h3>Enquiry #{enquiry.id}</h3>
                        </Link>
                            {/* <p>Paid: {enquiry.paid}</p>
                            <p>Start: {enquiry.start_time}</p>
                            <p>Duration: {enquiry.duration}</p>
                            <p>Terms agreement:{enquiry.terms_agreement}</p>
                            <p>Castle: {enquiry.castle_id}</p>
                            <p>Notes: {enquiry.notes}</p>
                            <p>Total: {enquiry.total}</p> */}
                    </Card>
                )
            })}

                
        </div>
    )
}

export default AllEnquiries;