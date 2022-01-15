import React, {useState} from 'react';
import {createCustomer} from '../services/customerServices';
import {useParams} from 'react-router-dom'
import {StyledForm} from '../styled/shared/forms'

const CustomerForm = ({ setCustomerId }) => {
    const {id} = useParams
    const [formData, setFormData] = useState({
        castle_id: id
    })

    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function formSubmit(event) {
        event.preventDefault()
        // post request form data to enquiries table
        createCustomer(formData)
        .then((response) => {
            setCustomerId(response.id)
        })
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <h3>Make a Booking Request</h3>
            <StyledForm onSubmit={formSubmit}>
                {/* // Customer profile
                // name, email, phone_number, street_number, street_name, suburb, postcode, notes
                // Enquiry form
                // start_time, end_time, paid (hidden from customer), terms_agreement, total */}
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={changeHandler}
                    required={true}
                />

                <p>Address of event castle will be delivered to:</p>
                <label>Street Number (if public space provide name here, e.g. Beth Boyd Park)</label>
                <input
                    type="text"
                    name="street_number"
                    value={formData.street_number}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Street Name</label>
                <input
                    type="text"
                    name="street_name"
                    value={formData.street_name}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Suburb</label>
                <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Postcode</label>
                <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={changeHandler}
                    required={true}
                />

                <label>Notes about hire space - e.g. power requirements (optional)</label>
                <input
                    type="text"
                    name="notes"
                    value={formData.notes}
                    onChange={changeHandler}
                />

                <button type="submit">Submit booking request</button>
            </StyledForm>
        </div>
    )
}

export default CustomerForm;