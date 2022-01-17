import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getCastle, } from '../services/castleServices'
import { useGlobalState } from '../utils/stateContext'
import { Div, StyledLink } from '../styled/castle'
import Loading from './Loading'

const Castle = () => {
    const [castle, setCastle] = useState('')
    const {id} = useParams()
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCastle(id)
        .then((castle) => {
            setCastle(castle)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [id])


    return(
        <>
        {loading ?
            <Loading /> :
            <Div>
                <StyledLink to='/castles'>Continue browsing</StyledLink>
                <h3>{castle.name}</h3>
                {castle.img_url && 
                    <img src={castle.img_url} style={{width: "400px"}} alt={castle.name}/>
                }
                <div>
                    {castle.available ? <p>Available now</p> : <p>Currently unavailable</p>}
                    <p>{castle.description}</p>
                    {castle.price && <p>$ {castle.price}</p>}
                    <Link to={`/castles/${castle.id}/enquiry`}>Make a Booking Request</Link>
                    {loggedInUser && <Link to={`/castles/${castle.id}/update`}>Edit castle</Link>}
                </div>
            </Div>
        }
        </>
    )
}

export default Castle;