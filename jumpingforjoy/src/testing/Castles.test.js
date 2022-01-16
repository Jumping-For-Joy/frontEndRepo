import React from 'react';
import "@testing-library/jest-dom";
import AllCastles from "../components/AllCastles";
import { render, screen, waitFor } from "./test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";


const server = setupServer(
    rest.get('https://jumping-for-joy-api.herokuapp.com/api/castles', (_request, response, context) => {
        return response(
            context.json([{
                available: true,
                created_at: "2022-01-11T01:19:40.625Z",
                description: "Avalanche mountain themed castle.",
                id: 8,
                img_url: "http://res.cloudinary.com/adriana-developer/image/upload/v1641867391/hxkcqdhlhtgom83jxk3o.png",
                name: "Avalanche",
                price: "40.0",
                updated_at: "2022-01-11T02:16:34.474Z"
            }])
        ) 
    }),
)

describe('AllCastles', () => {
    beforeAll(() => { 
        server.listen()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => { 
        server.close()
    })
    it('should display fetched castles', async () => {
        server.use()
        render(<AllCastles />)
        await waitFor(() => {
            expect(screen.getByText(/Avalanche/i)).toBeInTheDocument()
        })
    }) 
})