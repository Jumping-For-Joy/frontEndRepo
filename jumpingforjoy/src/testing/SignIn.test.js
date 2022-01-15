import React from 'react';
import "@testing-library/jest-dom";
import SignIn from "../components/SignIn";
import { render, screen, fireEvent, stateContext, waitFor } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

// declare which API requests to mock
const server = setupServer(
    rest.post('https://jumping-for-joy-api.herokuapp.com/api/auth/sign_in', (_request, response, context) => {
        return response(
            context.json({})
        ) 
    }),
)

describe('SignIn', () => {
    beforeAll(() => { 
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => { 
        server.close()
    })

    it('should be able to sign in with correct details', async () => {
        /** Arrange */
        server.use()
        render(<SignIn />)

        /** Assert */
        // Check that the user can see the email label (i.e. component has rendered)
        expect(screen.getByText('Email:')).toBeInTheDocument()
        expect(screen.getByText('Password:')).toBeInTheDocument()
        
        /** Act */
        fireEvent.change(
            screen.getByTestId('email'),
            { target: { value: 'adriana1@test.com' } }
        )
        fireEvent.change(
            screen.getByTestId('password'),
            { target: { value: 'password' } }
        )

        /** Assert */
        // Confirm that value has updated
        expect(screen.getByTestId('email')).toHaveValue('adriana1@test.com')
        expect(screen.getByTestId('password')).toHaveValue('password')
        
        /** Act */
        fireEvent.click(screen.getByTestId('submitButton'))

        /** Assert */
        await waitFor(() => {
            expect(stateContext.dispatch).toHaveBeenCalledTimes(2);
            // redirect
        })
    })

    it('should not log in with incorrect details', async () => {
        server.use(rest.post('https://jumping-for-joy-api.herokuapp.com/api/auth/sign_in', (_request, response, context) => {
            return response(context.status(403))
        }))
        render(<SignIn />)
        fireEvent.change(
            screen.getByTestId('email'),
            { target: { value: 'adriana1@test.com' } }
        )
        fireEvent.change(
            screen.getByTestId('password'),
            { target: { value: 'wrongpassword' } }
        )
        fireEvent.click(screen.getByTestId('submitButton'))
        await waitFor(() => {
            expect(screen.getByText(/Login unsuccessful/i)).toBeInTheDocument();
        })
    })
}) 