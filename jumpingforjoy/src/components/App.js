
import React, { useReducer, useEffect } from 'react'
import { getCastles } from '../services/castleServices'
import stateReducer from '../utils/stateReducer'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navigation';
import Home from './Home';
import About from './About';
import AllCastles from './AllCastles';
import Castle from './Castle';
import Enquiry from './Enquiry';
import AllEnquiries from './AllEnquiries';
import Enquiryform from './Enquiryform';
import AdminDashboard from './AdminDashboard';
import AddCastle from './AddCastle';
import EditCastle from './EditCastle';
import Footer from './Footer';
import SignUp from './SignUp'
import SignIn from './SignIn'
import { StateContext } from '../utils/stateContext';

function App() {
  const initialState = {
    castles: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: {token: sessionStorage.getItem("token") || null}
  }

  const [store, dispatch] = useReducer(stateReducer,initialState)
  
  // Load all of our castles from the database
  useEffect(() => {
    getCastles()
    .then((castles) => dispatch({type: 'setCastles', data: castles}))
    .catch((error) => console.log(error))
  }, [])


  return (
    <body>
      <>
        <StateContext.Provider value={{store, dispatch}}>

        <Router>
          <Nav />

          {/* Routes for the entire site: */}
          <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/castles" element={<AllCastles />}/>
              <Route path="/castles/:id" element={<Castle />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/" element={<Home />}/>
          </Routes>
        </Router>



          <Enquiry />
          <AllEnquiries />
          <Enquiryform />
          <AdminDashboard />
          <AddCastle />
          <EditCastle />
          <Footer />
          </StateContext.Provider>
      </>
      </body>
  );
}

export default App;
