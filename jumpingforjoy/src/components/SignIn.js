import React from 'react';

const SignIn = () => {

    return(
        <div>
            <h1>Sign in here</h1>
            <form>
                <label>Email:
                    <input type="email" name="email" />
                </label>
                <label>Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    )
}

export default SignIn;