import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getCastle, deleteCastle } from '../services/castleServices'
import { useGlobalState } from '../utils/stateContext'
import { Div } from '../styled/castle'
import Loading from './Loading'

const Castle = () => {
    const [castle, setCastle] = useState('')
    const {id} = useParams()
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [loading, setLoading] = useState(true)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getCastle(id)
        .then((castle) => {
            setCastle(castle)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [id])

    function handleDelete() {
        console.log('castle id', castle.id)
        deleteCastle(castle.id)
        .then(navigate('/'))
        .catch((error) => console.log('delete error', error.response.data))
    }

    function checkDelete() {
        setConfirmDelete(true)
    }

    function handleCancel() {
        setConfirmDelete(false)
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
                                <button onClick={checkDelete}>Delete this castle</button>
                                { confirmDelete && 
                                <span>
                                    <p>Are you sure? This is permanent and cannot be undone.</p>
                                    <button onClick={handleDelete}>Confirm delete</button>
                                    <button onClick={handleCancel}>Cancel delete</button>
                                </span>}
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