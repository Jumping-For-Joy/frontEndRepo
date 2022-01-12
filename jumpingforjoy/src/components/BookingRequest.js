import React, {useState} from 'react'
import EnquiryForm from './EnquiryForm'
import CustomerForm from './CustomerForm'
import {useParams} from 'react-router-dom'

const BookingRequest = () => {
    const [customerId, setCustomerId] = useState()
    const {id} = useParams()

    return (
        <>
            {customerId ? 
                <EnquiryForm customerId={customerId} castleId={id} /> : 
                <CustomerForm setCustomerId={setCustomerId} /> 
            }
        </>
    )
}

export default BookingRequest;