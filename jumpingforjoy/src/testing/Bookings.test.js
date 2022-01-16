import React from 'react';
import "@testing-library/jest-dom";
import AllBookings from "../components/AllBookings";
import { render, screen, waitFor } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.get('https://jumping-for-joy-api.herokuapp.com/api/bookings', (_request, response, context) => {
        return response(
            context.json([{
                id: 5,
                start_time: "2022-01-20T07:55:00.000Z",
                end_time:"2022-01-20T01:55:00.000Z",
                duration: 4,
                terms_agreement: true,
                total: null,
                paid: true,
                castle_id: 9,
                customer_id: 24,
                enquiry_id: 9,
                notes: "I'm writing a note!"
        }])
        ) 
    }),
)

describe('AllBookings', () => {
    beforeAll(() => { 
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => { 
        server.close()
    })
    it('should display fetched bookings', async () => {
        server.use()
        render(<AllBookings />)
        await waitFor(() => {
            expect(screen.getByText(/Booking #5/i)).toBeInTheDocument()
        })
    }) 
})