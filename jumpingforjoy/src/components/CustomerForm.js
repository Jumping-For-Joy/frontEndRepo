import React, {useState} from 'react';
import {createCustomer} from '../services/customerServices';
import {useParams} from 'react-router-dom'

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
            <form onSubmit={formSubmit}>
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
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={changeHandler}
                />

                <label>Street Number (address where castle is to be delivered to)</label>
                <input
                    type="text"
                    name="street_number"
                    value={formData.street_number}
                    onChange={changeHandler}
                />

                <label>Street Name</label>
                <input
                    type="text"
                    name="street_name"
                    value={formData.street_name}
                    onChange={changeHandler}
                />

                <label>Suburb</label>
                <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={changeHandler}
                />

                <label>Postcode</label>
                <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={changeHandler}
                />

                <label>Notes</label>
                <input
                    type="text"
                    name="notes"
                    value={formData.notes}
                    onChange={changeHandler}
                />

                <button type="submit">Submit booking request</button>
            </form>
        </div>
    )
}

export default CustomerForm;