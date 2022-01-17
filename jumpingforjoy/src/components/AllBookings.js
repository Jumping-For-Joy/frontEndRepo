import React from 'react'
import { Link } from 'react-router-dom'
// import {getBookings} from '../services/bookingServices'
import { Card } from '../styled/admin'
// import Loading from './Loading'

const AllBookings = ({bookings}) => {
    // const [bookings, setBookings] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     getBookings()
    //     .then((response) => {
    //         console.log('response', response)
    //         setBookings(response)
    //         setLoading(false)
    //         // displayNewEnquiries(response)
    //     })
    //     // .then(() => console.log('bookings', bookings))
    //     .catch((error) => console.log(error))
    // },[])
 
    // if enquiry_id === enquiry.id, don't render the enquiry
    // call the function from above with data from here, with arguments from bookings state

    // load bookings, call the function and pass bookings state as argument
    // load enquiries, passed the data from the function as props
    // check enquiries in map callback

    return (
        <div>
            {bookings.map((booking, index) => {
                return (
                    <Card key={booking.id}>
                        <Link key={booking.id} to={`/bookings/${booking.id}`}>
                            <h3>Booking #{booking.id}</h3>
                        </Link>
                    </Card>
                )
            })}
        </div>
    )
}

export default AllBookings;