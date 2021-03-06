import React from 'react'
import {render} from '@testing-library/react'
import { StateContext } from "../utils/stateContext";
import { BrowserRouter as Router } from 'react-router-dom';

export const stateContext = {
    store: {},
    dispatch: jest.fn()
}

const AllTheProviders = ({ children }) => {
  return (
    <Router>
        <StateContext.Provider value={stateContext}>
            {children}
        </StateContext.Provider>
    </Router>
  )
}

const customRender = (ui, options) =>
  render(
    ui, 
    {
        wrapper: AllTheProviders, 
        ...options
    }
)

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }