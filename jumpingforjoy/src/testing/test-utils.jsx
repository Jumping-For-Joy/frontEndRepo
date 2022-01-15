import React from 'react'
import {render} from '@testing-library/react'
import { StateContext } from "../utils/stateContext";
import { BrowserRouter as Router } from 'react-router-dom';

export const stateContext = {
    store: {
        castles: [
            {
                available: true,
                created_at: "2022-01-11T01:19:40.625Z",
                description: "Avalanche mountain themed castle.",
                id: 8,
                img_url: "http://res.cloudinary.com/adriana-developer/image/upload/v1641867391/hxkcqdhlhtgom83jxk3o.png",
                name: "Avalanche",
                price: "40.0",
                updated_at: "2022-01-11T02:16:34.474Z"
            }
        ]
    },
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