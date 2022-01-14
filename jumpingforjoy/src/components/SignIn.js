import React, {useState} from 'react';
import {signIn} from '../services/authServices';
import {useGlobalState} from '../utils/stateContext'
import { Form } from '../styled/signup'

const SignIn = () => {
    const initialState = {
        email: "",
        password: ""
    }

    const [userDetails, setUserDetails] = useState(initialState)
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    function formHandler(event) {
        setUserDetails({
            ...userDetails, 
            [event.target.name]: event.target.value
        })
    }

    function formSubmit(event) {
        event.preventDefault()
        // this is our call to database
        signIn(userDetails)
        .then(({email, jwt}) => {
            sessionStorage.setItem("token", jwt)
            sessionStorage.setItem("user", email)
            dispatch({type: 'setLoggedInUser', data: email})
            dispatch({type: 'setToken', data: jwt})
        })
        .catch((error) => console.log(error))       
        setUserDetails(initialState)
    }

    return(
        <Form>
            <div>
                <h3>Sign in</h3>
                <form onSubmit={formSubmit} data-testid="signInForm">
                    <label>Email:
                        <input 
                            type="email" 
                            name="email"
                            value={userDetails.email}
                            onChange={formHandler}
                            data-testid="email"
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password" 
                            name="password"
                            value={userDetails.password}
                            onChange={formHandler} 
                            data-testid="password"
                        />
                    </label>
                    <section>
                        <button 
                            type="submit"
                            data-testid="submitButton"
                        >
                            Sign in
                        </button>
                    </section>
                    <section>
                        {loggedInUser && <p>Success! Welcome {sessionStorage.user}.</p>}
                    </section>
                </form>
            </div>
        </Form>
    )
}

export default SignIn;