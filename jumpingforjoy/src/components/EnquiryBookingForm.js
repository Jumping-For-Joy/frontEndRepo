import React, {useState} from 'react'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'
import {StyledForm} from '../styled/shared/forms'

// form for creating and editing enquiries and bookings
const EnquiryBookingForm = ({handleSubmit, existingData}) => {

// beause this form is rendered by both new enquiries and for existing enquiries being turned into bookings, we need to check if data is being passed to prefil or if it needs to be blank
    function checkForExistingData(data) {
        if (data) {
            return ({
                ...existingData,
                start_time: new Date(existingData.start_time).toISOString().slice(0, -8)
            })
        }
        else {
            return {}
        }
    }

    const [formData, setFormData] = useState(checkForExistingData(existingData))
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

    // take form data for duration, convert to number data type (from string) and add to form data
    function durationChangeHandler(event) {
        let duration = parseInt(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: duration
        })
    }

    // handle changes on date & notes 
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

    // date change handler to combine date and time

    return (
        <div>
            <StyledForm onSubmit={(event) => { event.preventDefault(); handleSubmit(formData) }}>
                <label>Booking Start Time</label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        value={formData.start_time}
                        onChange={changeHandler}
                        required={true}
                        data-testid="start"
                    />

                <label>Booking Duration
                    <span>
                        <input 
                            type="radio"
                            name="duration"
                            value={4}
                            onChange={durationChangeHandler}
                            checked={formData.duration === 4}
                            data-testid="fourHours"
                        />
                        4 Hours
                    </span>

                    <span>
                        <input 
                            type="radio"
                            name="duration"
                            value={8}
                            onChange={durationChangeHandler}
                            checked={formData.duration === 8}
                        />
                        8 Hours
                    </span>

                    <span>
                        <input 
                            type="radio"
                            name="duration"
                            value={24}
                            onChange={durationChangeHandler}
                            checked={formData.duration === 24}
                        />
                        24 Hours
                    </span>

                </label>

                <label htmlFor="notes">Notes (optional)</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={changeHandler}
                        data-testid="notes"
                    >{formData.notes}</textarea>

                <Link to="/Jumping-For-Joy-TCSI.pdf" target="blank" onClick={handleTerms}>Terms and Conditions</Link>
                <span>
                        <input
                            id="terms_agreement"
                            type="checkbox"
                            name="terms_agreement"
                            checked={formData.terms_agreement} 
                            onChange={checkboxHandler}
                            disabled={!termsRead}
                            required={true}
                            data-testid="terms"
                        />
                    <label>I have read and agree to the terms agreement</label>
                </span>

                {/* Only admin can check or uncheck whether or not this is paid */}
                {loggedInUser && 
                    <span>
                            <input
                                id="paid"
                                type="checkbox"
                                name="paid"
                                checked={formData.paid} 
                                onChange={checkboxHandler}
                            />
                        <label>Mark as paid</label>
                    </span>
                }

                <button type="submit" data-testid="submitButton">Submit</button>
            </StyledForm>
        </div>
    )
}

export default EnquiryBookingForm;