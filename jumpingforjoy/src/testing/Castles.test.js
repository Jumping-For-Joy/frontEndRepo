import React from 'react';
import "@testing-library/jest-dom";
import AllCastles from "../components/SignIn";
import { StateContext } from "../utils/stateContext";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Castles', () => {
    it('should display a castle name', () => {
        render(
            <StateContext.Provider value={{store: {}, dispatch: {}}}>
                <AllCastles />
            </StateContext.Provider>
        )
        // expect(screen.getByText(/Jumping Castles/i)).toBeInTheDocument()
    }) 
})