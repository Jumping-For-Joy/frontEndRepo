import React from 'react';
import AllEnquiries from './AllEnquiries'
import AllBookings from './AllBookings'
import {Container, DivOne, DivTwo} from '../styled/admin'
import {useGlobalState} from '../utils/stateContext'

const AdminDashboard = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store

    return (
        <Container>
            {loggedInUser && 
            <>
                <h3>Welcome admin</h3>
                <DivOne>
                    <DivTwo>
                        <h4>Booking Enquiries</h4>
                        <AllEnquiries />
                    </DivTwo>
                    <DivTwo>
                        <h4>Confirmed Bookings</h4>
                        <AllBookings /> 
                    </DivTwo>
                </DivOne>
            </>
            }
        </Container>
    )
}

export default AdminDashboard;