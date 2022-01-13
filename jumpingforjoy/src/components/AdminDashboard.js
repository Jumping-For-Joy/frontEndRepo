import React, {useState, useEffect} from 'react';
import AllEnquiries from './AllEnquiries'
import AllBookings from './AllBookings'
import {Container, DivOne, DivTwo} from '../styled/admin'

const AdminDashboard = () => {
    const [enquiries, setEnquiries] = useState([])

    return (
        <Container>
            <h3>Welcome admin</h3>
            <DivOne>
                <DivTwo>
                    <h4>Enquiries</h4>
                    <AllEnquiries />
                </DivTwo>
                <DivTwo>
                    <h4>Bookings</h4>
                    <AllBookings /> 
                </DivTwo>
            </DivOne>
        </Container>
    )
}

export default AdminDashboard;