import React from 'react';
import "@testing-library/jest-dom";
import AllCastles from "../components/AllCastles";
import { render, screen, waitFor } from "./test-utils";

describe('AllCastles', () => {
    it('should display fetched castles', async () => {
        render(<AllCastles />)
        await waitFor(() => {
            expect(screen.getByText(/Avalanche/i)).toBeInTheDocument()
        })
    }) 
})