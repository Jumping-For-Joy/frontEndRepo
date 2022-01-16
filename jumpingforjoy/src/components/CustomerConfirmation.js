import React from 'react'
import { Container } from '../styled/confirmation'
import { Link } from 'react-router-dom'

const CustomerConfirmation = () => {
    return (
        <Container>
            <h3>Success!</h3>
            <p>Your booking request has been submitted. We'll be in touch soon.</p>
            <p>Thank you for choosing Jumping for Joy.</p>
            <Link to='/'>Keep browsing</Link>
        </Container>
    )
}

export default CustomerConfirmation;