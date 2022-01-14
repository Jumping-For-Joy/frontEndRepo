import React from 'react';
import "@testing-library/jest-dom";
import SignIn from "../components/SignIn";
import { StateContext } from "../utils/stateContext";
import { render, screen, fireEvent } from "@testing-library/react";

describe('SignIn', () => {
    it('should be able to type an field', () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <SignIn />
            </StateContext.Provider>
        );
        // Check that the user can see the email label (i.e. component has rendered)
        expect(screen.getByText('Email:')).toBeInTheDocument();
        // Update the value. I'm using data-testid here but it's usually better practise
        // to try and find elements by their label (i.e. how the customer will see it)
        // However, to make writing the tests easier while you're still learning, using data-testid is
        // is a lot simpler and perfectly fine
        fireEvent.change(
            screen.getByTestId('email'),
            { target: { value: 'test@text.com' } }
        );
        // Confirm that value has updated
        expect(screen.getByTestId('email')).toHaveValue('test@text.com')
    })
})