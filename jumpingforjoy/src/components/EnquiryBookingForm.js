import React, {useState} from 'react'
import {useGlobalState} from '../utils/stateContext'

const EnquiryBookingForm = ({handleSubmit, existingData}) => {
    // if rendering form for creating confirmed booking, use enq details
    // if new enquiry, initialise with empty object
    const [formData, setFormData] = useState({
        ...existingData,
        start_time: new Date(existingData.start_time).toISOString().slice(0, -8)
    } || {})
    const [termsRead, setTermsRead] = useState(false)
    const {store} = useGlobalState()
    const {loggedInUser} = store
    
    // set terms agreement to true or false
    function checkboxHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        })
    }

    // take form data for duration, convert to number data type and add to form data
    function durationChangeHandler(event) {
        let duration = parseInt(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: duration
        })
    }

    // set the start time from form data
    function dateChangeHandler(event) { 
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        // date format 2022-01-27T15:00 from HTML form
        // "2022-01-27T15:00"
    }

    // adding notes to booking
    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }

    // make sure terms are clicked on or 'read' before user can agree to them
    function handleTerms() {
        setTermsRead(true)
    }

    return (
        <>
        <form onSubmit={(event) => { event.preventDefault(); handleSubmit(formData) }}>
            <label>Booking Start Time
                <input
                    type="datetime-local"
                    name="start_time"
                    value={formData.start_time}
                    onChange={dateChangeHandler}
                    required={true}
                />
            </label>

            <label>Booking Duration
                <input 
                    type="radio"
                    name="duration"
                    value={4}
                    onChange={durationChangeHandler}
                    checked={formData.duration === 4}
                />
                4 Hours
                <input 
                    type="radio"
                    name="duration"
                    value={8}
                    onChange={durationChangeHandler}
                    checked={formData.duration === 8}
                />
                8 Hours
                <input 
                    type="radio"
                    name="duration"
                    value={24}
                    onChange={durationChangeHandler}
                    checked={formData.duration === 24}
                />
                24 Hours
            </label>

            <label>Notes - about venue/hire/site, booking times etc.
                <input
                    type="textarea"
                    name="notes"
                    value={formData.notes}
                    onChange={changeHandler}
                />
            </label>
            <a href="#" target="blank" onClick={handleTerms}>Terms and Conditions</a>
            <label>I have read and agree to the terms agreement
                <input
                    id="terms_agreement"
                    type="checkbox"
                    name="terms_agreement"
                    checked={formData.terms_agreement} 
                    onChange={checkboxHandler}
                    disabled={!termsRead}
                    required={true}
                />
            </label>
            {/* Only admin can check or uncheck whether or not this is paid */}
            {loggedInUser && 
                <>
                    <label>Mark as paid
                        <input
                            id="paid"
                            type="checkbox"
                            name="paid"
                            checked={formData.paid} 
                            onChange={checkboxHandler}
                        />
                    </label>
                </>
            }

            <button type="submit">Submit booking request</button>
        </form>

        </>
    )
}

export default EnquiryBookingForm;