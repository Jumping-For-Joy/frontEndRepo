import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signIn } from '../services/authServices';
import { useGlobalState } from '../utils/stateContext'
import { Form } from '../styled/shared/forms'

const SignIn = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState('')
    const {dispatch} = useGlobalState()

    function formHandler(event) {
        setUserDetails({
            ...userDetails, 
            [event.target.name]: event.target.value
        })
    }

    function formSubmit(event) {
        event.preventDefault()
        signIn(userDetails)
        .then(({email, jwt}) => {
            sessionStorage.setItem("token", jwt)
            sessionStorage.setItem("user", email)
            dispatch({type: 'setLoggedInUser', data: email})
            dispatch({type: 'setToken', data: jwt})
        })
        .catch((error) => console.log(error))
        .finally(navigate('/admin'))       
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
                </form>
            </div>
        </Form>
    )
}

export default SignIn;