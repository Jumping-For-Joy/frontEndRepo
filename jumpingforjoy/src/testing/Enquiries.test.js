import React from 'react';
import "@testing-library/jest-dom";
import EnquiryBookingForm from "../components/EnquiryBookingForm";
import { render, screen, fireEvent, waitFor } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.post('https://jumping-for-joy-api.herokuapp.com/api/bookings', (_request, response, context) => {
        return response(
            context.json({})
        ) 
    }),
)

describe('BookingEnquiryForm', () => {
    beforeAll(() => { 
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => { 
        server.close()
    })

    it('should be able to fill out form', () => {
        render(<EnquiryBookingForm />)
        fireEvent.change(
            screen.getByTestId('notes'),
            { target: { value: 'Will need help setting up castle' } }
        )
        expect(screen.getByTestId('notes')).toHaveValue('Will need help setting up castle')
        // getting error that we dont know what start_time is AKA because the request hasn't been made state hasn't been set? I guess idk
    }) 
    it('should be able to submit the form', async () => {
        server.use()
        const handleSubmit = jest.fn()
        render(<EnquiryBookingForm handleSubmit={handleSubmit} />)
        fireEvent.change(
            screen.getByTestId('start'),
            { target: { value: '2022-01-13T15:35:00.000' } }
        )
        fireEvent.change(
            screen.getByTestId('fourHours'),
            { target: { value: 4 } }
        )
        fireEvent.change(
            screen.getByTestId('terms'),
            { target: { value: true } }
        )
        fireEvent.click(screen.getByTestId('submitButton'))
        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1)
        })
    })
})