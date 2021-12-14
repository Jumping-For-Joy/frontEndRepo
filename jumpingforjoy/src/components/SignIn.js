import React, {useState} from 'react';
import {signIn} from '../services/authServices';
import {useGlobalState} from '../utils/stateContext'

const SignIn = () => {
    const [ userDetails, setUserDetails ] = useState({
        email: "",
        password: ""
    })
    const {dispatch} = useGlobalState()

    // 
    function formHandler(event) {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value})
        console.log(userDetails)
    }

    function formSubmit(event) {
        event.preventDefault()
        // this is our call to database
        signIn(userDetails)
        .then(({email, jwt}) => {
            console.log(email, jwt)
            sessionStorage.setItem("token", jwt)
            sessionStorage.setItem("user", email)
            dispatch({type: 'setLoggedInUser', data: email})
            dispatch({type: 'setToken', data: jwt})
        })
        .catch((error) => console.log(error))       
        // reset userDetails at this point?
    }

    return(
        <div>
            <h1>Sign in</h1>
            <form onSubmit={formSubmit}>
                <label>Email:
                    <input 
                        type="email" 
                        name="email"
                        value={userDetails.email}
                        onChange={formHandler} />
                </label>
                <label>Password:
                    <input 
                        type="password" 
                        name="password"
                        value={userDetails.password}
                        onChange={formHandler} />
                </label>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;