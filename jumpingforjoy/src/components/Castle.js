import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import {getCastle} from '../services/castleServices'
// import {useGlobalState} from '../utils/stateContext'

const Castle = () => {
    // set local state to the right caslte
    const [castle, setCastle] = useState('')
    const {id} = useParams()
    // this is where we would use global state to set logged in user
    // const {store, dispatch} = useGlobalState()
    // const {loggedInUser} = store

    useEffect(() => {
        getCastle(id)
        .then((castle) => setCastle(castle))
        .catch((error) => console.log(error))
    }, [])

    return(
        <div>
             <h3>{castle.name}</h3>
             <p>{castle.description}</p>

             {/* Load edit options for admin here:
             {loggedInUser &&
                <button>Edit</button>
                <button>Hide</button>} */}
            {/* <Link to="/enquiry/new">Enquire</Link> */}
        </div>
    )
}

export default Castle;