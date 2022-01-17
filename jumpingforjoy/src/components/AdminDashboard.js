import React, { useEffect, useState } from 'react';
import { getBookings } from '../services/bookingServices'
import { getEnquiries } from '../services/enquiryServices'
import Loading from './Loading'
import AllEnquiries from './AllEnquiries'
import AllBookings from './AllBookings'
import { Container, DivOne, DivTwo } from '../styled/admin'
import { useGlobalState } from '../utils/stateContext'

const AdminDashboard = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [loading, setLoading] = useState(true)
    const [bookings, setBookings] = useState([])
    const [enquiries, setEnquiries] = useState([])

    useEffect(() => {
        getEnquiries()
        .then((response) => {
            setEnquiries(response)
        })
        .then(
            getBookings()
            .then((response) => {
                console.log('response', response)
                setBookings(response)
            })
            .catch((error) => console.log(error))
            .finally(setLoading(false))
        )
        .catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    function filteredEnquiries() {
        return enquiries.filter(enquiry => {
            return !bookings.some(booking => {
                return enquiry.id === booking.enquiry_id
            })
        })
    }

    return (
        <Container>
            { loading ? 
            <Loading /> :
                <>
                {loggedInUser && 
                    <>
                    <h3>Welcome admin</h3>
                    <DivOne>
                        <DivTwo>
                            <h4>New Enquiries</h4>
                            <AllEnquiries enquiries={filteredEnquiries()} />
                        </DivTwo>
                        <DivTwo>
                            <h4>Confirmed Bookings</h4>
                            <AllBookings bookings={bookings} /> 
                        </DivTwo>
                    </DivOne>
                    </>
                }
            </>
            }
        </Container>
    )
}

export default AdminDashboard;