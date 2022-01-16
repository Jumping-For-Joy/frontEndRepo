import React, {useState} from 'react'
import EnquiryForm from './EnquiryForm'
import CustomerForm from './CustomerForm'
import {useParams} from 'react-router-dom'
import { StyledForm } from '../styled/shared/forms'

// Directed to here when a customer selects 'make an enquiry' from castle listing 
const BookingRequest = () => {
    const [customerId, setCustomerId] = useState()
    
    // take id of the castle from the params, so we can assign castle id to the enquiry AKA booking request
    const {id} = useParams()

    return (
        <StyledForm>
        {/* customer id is only true once the customer form has been successfully posted, so once it is not null, the enquiry form will render */}
            {customerId ? 
                <EnquiryForm customerId={customerId} castleId={id} /> : 
                <CustomerForm setCustomerId={setCustomerId} /> 
            }
        </StyledForm>
    )
}

export default BookingRequest;