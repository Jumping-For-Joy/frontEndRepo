import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { signIn } from '../services/authServices';
import { useGlobalState } from '../utils/stateContext'
import { StyledForm } from '../styled/shared/forms'


const SignIn = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState('')
    const {dispatch} = useGlobalState()
    const [showError, setShowError] = useState(false);

    function formHandler(event) {
        event.preventDefault();
        setShowError(false);
        setUserDetails({
            ...userDetails, 
            [event.target.name]: event.target.value
        })
    }

    function formSubmit(event) {
        event.preventDefault()
        setShowError(false);
        signIn(userDetails)
            .then(({email, jwt}) => {
                sessionStorage.setItem("token", jwt)
                sessionStorage.setItem("user", email)
                dispatch({type: 'setLoggedInUser', data: email})
                dispatch({type: 'setToken', data: jwt})
                navigate('/admin')
            })
            .catch((error) => {
                setShowError(true)   
                // console.log(error)
            })
    }

    return(
        <StyledForm>
            <div>
                <h3>Sign in</h3>
                {showError && <p style={{ color: 'red', textAlign: 'center' }}>Login unsuccessful</p>}
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
                <Link to='/signup'>Create new admin account</Link>
            </div>
        </StyledForm>
    )
}

export default SignIn;