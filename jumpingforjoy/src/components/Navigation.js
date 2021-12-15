import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, UnorderedList } from '../styled/navigation';
import jfjcastle from './jfjcastle.png';
import React from 'react';
import {signOut} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'

const Navigation =() => {
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
        <Nav>
            <UnorderedList>
                <li>
                    <Link to="/" className="active">Home</Link>
                </li>
                <li>
                    <Link to="/castles" className="active">Jumping Castles</Link>
                </li>
                <li>
                    <Link to="/about" className="active">About</Link>
                </li>
            </UnorderedList>
            <div className="img">
                    <img src={jfjcastle} alt="jfjcastle" width="45"/>
            </div>
        </Nav>
    );
}

export default Navigation;