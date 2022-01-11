import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getCastle, deleteCastle} from '../services/castleServices'
import {useGlobalState} from '../utils/stateContext'

const Castle = () => {
    // set local state to the right castle
    const [castle, setCastle] = useState('')
    const {id} = useParams()
    // this is where we use global state to set logged in user
    const {store} = useGlobalState()
    const {loggedInUser} = store

    useEffect(() => {
        getCastle(id)
        .then((castle) => setCastle(castle))
        .catch((error) => console.log(error))
    }, [])

    function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete this castle? This is a permanent change that cannot be undone.")
        if (confirmDelete === true) {
            deleteCastle(id)
            .then(response => response.data)
            .catch(error => console.log(error))
        }
    }

    return(
        <div>
            <h3>{castle.name}</h3>
            <p>{castle.description}</p>
            <p>{castle.price}</p>
            {castle.img_url && 
                <div>
                    <img src={castle.img_url} style={{width: "400px"}}/>
                </div>
            }
            {castle.available ? <p>Available now</p> : <p>Currently unavailable</p>}
            {loggedInUser &&
            <span>
                <Link to={`/castles/${castle.id}/update`}>Edit castle</Link>
                <button onClick={handleDelete}>Delete this castle</button>
            </span>}
        </div>
    )
}

export default Castle;