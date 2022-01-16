import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { getCastle, deleteCastle } from '../services/castleServices'
import { useGlobalState } from '../utils/stateContext'
import { Div } from '../styled/castle'
import Loading from './Loading'


const Castle = () => {
    // set local state to the right castle
    const [castle, setCastle] = useState('')
    const {id} = useParams()
    // this is where we use global state to set logged in user
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

    function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete this castle? This is a permanent change that cannot be undone.")
        if (confirmDelete === true) {
            deleteCastle(id)
            .then(response => response.data)
            .catch(error => console.log('delete castle error >', error))
        }
        console.log('confirm delete>', confirmDelete, 'castle >', castle)
    }

    return(
        <>
        {loading ?
            <Loading /> :
            <Div>
                <h3>{castle.name}</h3>
                {castle.img_url && 
                    <img src={castle.img_url} style={{width: "400px"}} alt={castle.name}/>
                }
                <div>
                    <p>{castle.description}</p>
                    {castle.price && <p>$ {castle.price}</p>}
                    <section>
                        <Link to={`/castles/${castle.id}/enquiry`}>Make a Booking Request</Link>
                        {loggedInUser &&
                            <>
                                {castle.available ? <p>Available now</p> : <p>Currently unavailable</p>}
                                <Link to={`/castles/${castle.id}/update`}>Edit castle</Link>
                                <button onClick={handleDelete}>Delete this castle</button>
                            </>
                        }
                    </section>
                </div>
            </Div>
        }
        </>
    )
}

export default Castle;