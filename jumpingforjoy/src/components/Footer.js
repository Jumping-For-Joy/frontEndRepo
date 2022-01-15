import React from 'react';
import { StyledFooter } from '../styled/footer'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'
import { signOut } from '../services/authServices'


const Footer =() => {
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

    return(
        
        <StyledFooter>
            <footer>
                <p> ©Jumping for Joy 2021 </p>
                <Link to={loggedInUser ? "/admin" : "signin"}>Admin Dashboard</Link>
                { loggedInUser && <Link to="/" className="active" onClick={handleSignOut}>Sign Out</Link> }
            </footer>
        </StyledFooter>
    
    )
}

export default Footer;