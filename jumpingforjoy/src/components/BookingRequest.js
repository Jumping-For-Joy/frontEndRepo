import React, {useState} from 'react'
import EnquiryForm from './EnquiryForm'
import CustomerForm from './CustomerForm'
import {useParams} from 'react-router-dom'
import { Div } from '../styled/bookingrequest'

const BookingRequest = () => {
    const [customerId, setCustomerId] = useState()
    const {id} = useParams()

    return (
        <Div>
            {customerId ? 
                <EnquiryForm customerId={customerId} castleId={id} /> : 
                <CustomerForm setCustomerId={setCustomerId} /> 
            }
        </Div>
    )
}

export default BookingRequest;