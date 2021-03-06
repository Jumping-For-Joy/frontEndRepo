import React, { useReducer, useEffect } from 'react'
import stateReducer from '../utils/stateReducer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navigation';
import About from './About';
import AllCastles from './AllCastles';
import Castle from './Castle';
import Enquiry from './Enquiry';
import AdminDashboard from './AdminDashboard';
import AddCastle from './AddCastle';
import EditCastle from './EditCastle';
import Footer from './Footer';
import SignUp from './SignUp'
import SignIn from './SignIn'
import BookingRequest from './BookingRequest'
import BookingForm from './BookingForm'
import Booking from './Booking'
import EditBooking from './EditBooking'
import CustomerConfirmation from './CustomerConfirmation'
import { StateContext } from '../utils/stateContext';
import Home from './Home';


function App() {
  const initialState = {
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: {token: sessionStorage.getItem("token") || null}
  }

  const [store, dispatch] = useReducer(stateReducer,initialState)
  
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Open Sans, sans-serif',
  }

  return (
      <div style={containerStyles}>
          <StateContext.Provider value={{store, dispatch}}>

          <Router>
            <Nav />

            {/* Routes for the entire site: */}
            <Routes>
                <Route path="/about" element={<About />}/>

                {/* castle routes */}
                <Route path="/" element={<Home />}/>
                <Route path="/castles" element={<AllCastles />}/>
                <Route path="castles/new" element={<AddCastle />}/>
                <Route path="/castles/:id" element={<Castle />}/>
                <Route path="/castles/:id/update" element={<EditCastle />}/>

                {/* enquiry routes */}
                <Route path="/castles/:id/enquiry" element={<BookingRequest />}/>
                <Route path="/confirmation" element={<CustomerConfirmation />}/>

                {/* admin routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/enquiries/:id" element={<Enquiry />}/>
                <Route path="/enquiries/:id/manage" element={<BookingForm />}/>
                <Route path="/bookings/:id" element={<Booking />} />
                <Route path="/bookings/:id/manage" element={<EditBooking />} />

                {/* auth routes */}
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/signin" element={<SignIn />}/>

                {/* <Route path="/" element={<Home />}/> */}
            </Routes>
            <Footer />
          </Router>

            </StateContext.Provider>
      </div>
      
  );
}

export default App;
