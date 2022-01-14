import React from 'react';
import "@testing-library/jest-dom";
import SignIn from "../components/SignIn";
import { StateContext } from "../utils/stateContext";
import { render, screen, fireEvent } from "@testing-library/react";

describe('SignIn', () => {
    it('should be able to sign in with correct details', () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <SignIn />
            </StateContext.Provider>
        )
        // Check that the user can see the email label (i.e. component has rendered)
        expect(screen.getByText('Email:')).toBeInTheDocument()
        
        fireEvent.change(
            screen.getByTestId('email'),
            { target: { value: 'adriana1@test.com' } }
        )
        // Confirm that value has updated
        expect(screen.getByTestId('email')).toHaveValue('adriana1@test.com')
        expect(screen.getByText('Password:')).toBeInTheDocument()
        fireEvent.change(
            screen.getByTestId('password'),
            { target: {value: 'password'}}
            )
        expect(screen.getByTestId('password')).toHaveValue('password')
        expect(screen.getByTestId('submitButton')).toBeInTheDocument()
        // expect global state loggedInUser to be true
    })

    it('should not log in with incorrect details', () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <SignIn />
            </StateContext.Provider>
        )
        fireEvent.change(
            screen.getByTestId('email'),
            { target: { value: 'adriana1@test.com' } }
        )
        fireEvent.change(
            screen.getByTestId('password'),
            { target: { value: 'wrongpassword' } }
        )
        // expect loggedInUser (global state) to be false)
    })
})