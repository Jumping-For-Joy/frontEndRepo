import React from 'react';
import "@testing-library/jest-dom";
import EnquiryBookingForm from "../components/EnquiryBookingForm";
import { StateContext } from "../utils/stateContext";
import { render, screen, fireEvent } from "@testing-library/react";

describe('BookingEnquiryForm', () => {
    it('should be able to fill out form', () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <EnquiryBookingForm />
            </StateContext.Provider>
        )
        fireEvent.change(
            screen.getByLabelText('Notes'),
            { target: { value: 'Will need help setting up castle' } }
        )
        expect(screen.getByLabelText('Notes')).toHaveValue('Will need help setting up castle')
        // getting error that we dont know what start_time is AKA because the request hasn't been made state hasn't been set? I guess idk
    }) 
    it('should be able to submit the form', () => {

    })
})