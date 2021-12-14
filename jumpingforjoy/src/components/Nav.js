import React from 'react';
import {Link} from 'react-router-dom'
import {signOut} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'

const Nav =() => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store
    
    function handleSignOut(event) {
        event.preventDefault()
        signOut(loggedInUser)
        .then(() => {
            dispatch({type: 'setLoggedInUser', data: null})
            dispatch({type: 'setToken', data: null})
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className="navarea">
            <div className="topnav">
                <Link to="/" className="active">Home</Link>
                <Link to="/castles" className="active">Jumping Castles</Link>
                <Link to="/about" className="active">About</Link>
                {loggedInUser && 
                <button onClick={handleSignOut}>Sign Out</button>}
            </div>
        </div>
    );
}

export default Nav;