import React from 'react';
import "@testing-library/jest-dom";
import { StateContext } from "../utils/stateContext";
import { render, screen } from "@testing-library/react";
import AdminDashboard from '../components/AdminDashboard';

describe('AdminDashboard', () => {
    it('should display enquiries', async () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <AdminDashboard />
            </StateContext.Provider>
        )
        await expect(screen.getByText(/Booking #/i)).toBeInTheDocument()
    }) 
    it('should display bookings', async () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <AdminDashboard />
            </StateContext.Provider>
        )
        await expect(screen.getByText(/Enquiry #/i)).toBeInTheDocument()
    })
})