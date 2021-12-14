import React, {useState} from 'react';

const SignIn = () => {
    const [ userDetails, setUserDetails ] = useState({
        email: "",
        password: ""
    })

    function formHandler(event) {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value})
        console.log(userDetails)
    }

    function formSubmit(event) {
        event.preventDefault()
        // make our call to the database here
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