import React from 'react';
import {Link} from 'react-router-dom'
// import {getEnquiries} from '../services/enquiryServices'
import {Card} from '../styled/admin'
// import Loading from './Loading'

const AllEnquiries = ({enquiries}) => {
    // const [enquiries, setEnquiries] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     getEnquiries()
    //     .then((response) => {
    //         setEnquiries(response)
    //         setLoading(false)
    //     })
    //     .then(
    //         filterEnquiries(confirmedEnquiries)
    //     )
    //     // .then((response) => console.log('enquiries response >', response, 'enquiries', enquiries))
    //     .catch((error) => console.log(error))
    // }, [])

    // we only want to render enquiries that have not been turned into bookings

    // function filterEnquiries(array) {
    //     console.log('type', typeof array)
    //     let newEnquiries = array.filter(id => id === enquiries.id)
    //     console.log('new enq', newEnquiries)
    //     return newEnquiries
    // }

    return (
        <div>
            {enquiries.map((enquiry, index) => {
                return (
                    <Card key={enquiry.id}>
                        <Link key={enquiry.id} to={`/enquiries/${enquiry.id}`}>
                            <h3>Enquiry #{enquiry.id}</h3>
                        </Link>
                    </Card>
                )
            })}
        </div>
    )
}

export default AllEnquiries;