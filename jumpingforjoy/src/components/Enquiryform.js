import React, {useState} from 'react';
import {createEnquiry} from '../services/enquiryServices';

const EnquiryForm = ({customerId, castleId}) => {
    const [formData, setFormData] = useState({})
    // state to let user know form was successfully submitted
    const [submitted, setSubmitted] = useState(false)
    const [termsRead, setTermsRead] = useState(false)

    function dateChangeHandler(event) { 
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function durationChangeHandler(event) {
        let duration = parseInt(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: duration
        })
    }

    function handleTerms() {
        setTermsRead(true)
    }

    function getEndTime(startTime, duration) {
        let start = new Date(startTime)
        let hours = parseInt(duration)
        let endTime = new Date(new Date(start).setHours(start.getHours() + hours))
        console.log('endtime >', endTime)
        return endTime
    }

    function checkboxHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.checked
        })
        console.log(castleId)
    }

    function handleSubmit(event) {
        event.preventDefault()
        createEnquiry({
            ...formData,
            customer_id: customerId,
            end_time: getEndTime(formData.start_time, formData.duration), 
            castle_id: 9,
            paid: false
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
        setSubmitted(true)
    }

    return (
        <div>
            <h3>Booking Request Details</h3>
            <form onSubmit={handleSubmit}>
                <label>Booking Start Time</label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        value={formData.start_time}
                        onChange={dateChangeHandler}
                        required="true"
                    />

                <label>Booking Duration
                    <input 
                        type="radio"
                        name="duration"
                        value={4}
                        onChange={durationChangeHandler}
                    />
                    4 Hours
                    <input 
                        type="radio"
                        name="duration"
                        value={8}
                        onChange={durationChangeHandler}
                    />
                    8 Hours
                    <input 
                        type="radio"
                        name="duration"
                        value={24}
                        onChange={durationChangeHandler}
                    />
                    24 Hours
                </label>

                <a href="#" target="blank" onClick={handleTerms}>Terms and Conditions</a>
                <label>I have read and agree to the terms agreement</label>
                    <input
                        id="terms_agreement"
                        type="checkbox"
                        name="terms_agreement"
                        checked={formData.terms_agreement} 
                        onChange={checkboxHandler}
                        disabled={!termsRead}
                        required="true"
                    />

                <button type="submit">Submit booking request</button>
                {submitted && <p>Booking request successfully submitted!</p>}

            </form>
        </div>
    )
}

export default EnquiryForm;