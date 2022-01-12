import React, {useState} from 'react';
import {signUp} from '../services/authServices';
import {useGlobalState} from '../utils/stateContext'
import { Form } from '../styled/signup'

const SignUp = () => {
    const initialState = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
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
        signUp(userDetails)
        .then(({email, jwt}) => {
            sessionStorage.setItem("token", jwt)
            sessionStorage.setItem("user", email)
            dispatch({type: 'setLoggedInUser', data: email})
            dispatch({type: 'setToken', data: jwt})
        })
        .catch(error => console.log(error))
        setUserDetails(initialState)
    }

    return(
        <Form>
        <div>
            <h3>Create new account</h3>
            <form onSubmit={formSubmit}>
                <label>Name:
                    <input 
                        type="text" 
                        name="name"
                        value={userDetails.name}
                        onChange={formHandler} />
                </label>
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
                <label>Password confirmation:
                    <input 
                        type="password" 
                        name="password_confirmation"
                        value={userDetails.password_confirmation}
                        onChange={formHandler} />
                </label>
                <section>
                    <button type="submit">Create account</button>
                    {loggedInUser && <p>Success!</p>}
                </section>
            </form>
        </div>
        </Form>
    )
}

export default SignUp;