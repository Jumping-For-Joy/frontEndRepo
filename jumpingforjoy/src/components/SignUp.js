import React from 'react';

const SignUp = () => {

    return(
        <div>
            <h1>Sign up here</h1>
            <form>
                <label>Email:
                    <input type="email" name="email" />
                </label>
                <label>Password:
                    <input type="password" name="password" />
                </label>
                <label>Password confirmation:
                    <input type="password" name="password_confirmation" />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SignUp;