import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {getEnquiries} from '../services/enquiryServices'
import {Card} from '../styled/admin'
import Loading from './Loading'

const AllEnquiries = () => {
    const [enquiries, setEnquiries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getEnquiries()
        .then((response) => {
            setEnquiries([...enquiries, ...response])
            console.log('response >', response, 'enquiries >', enquiries)
            setLoading(false)
        })
        // .then((response) => console.log('enquiries response >', response, 'enquiries', enquiries))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            { loading ? 
            <Loading /> :
            <>
                {enquiries.map((enquiry, index) => {
                    return (
                        <Card key={enquiry.id}>
                            <Link key={enquiry.id} to={`/enquiries/${enquiry.id}`}>
                                <h3>Enquiry #{enquiry.id}</h3>
                            </Link>
                        </Card>
                    )
                })}
            </>
            }
        </div>
    )
}

export default AllEnquiries;