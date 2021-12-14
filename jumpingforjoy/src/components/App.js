import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import AllCastles from './AllCastles';
// import Castle from './Castle';
// import Enquiry from './Enquiry';
// import AllEnquiries from './AllEnquiries';
// import Enquiryform from './Enquiryform';
// import Admindashboard from './AdminDashboard';
// import AddCastle from './AddCastle';
// import EditCastle from './EditCastle';
import Footer from './Footer';
import SignUp from './SignUp'

function App() {
  return (
    <>
      {/* <body> */}

        <Router>
          <Nav />

          <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/forhire" element={<AllCastles />}/>
              <Route path="/signup" element={<SignUp />}/>
              {/* <Route path="/signin" component={SignIn}/> */}
              <Route path="/" element={<Home />}/>
          </Routes>
        </Router>



          {/* <Nav />
          <Home />
          <About />
          <AllCastles />
          <Castle />
          <Enquiry />
          <AllEnquiries />
          <Enquiryform />
          <Admindashboard />
          <AddCastle />
          <EditCastle /> */}
          <Footer />
      {/* </body> */}
    </>
  );
}

export default App;
