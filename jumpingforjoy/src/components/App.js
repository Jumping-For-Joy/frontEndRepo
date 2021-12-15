import './App.css';
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

function App() {
  return (
    <>
      <body>

        <Router>
          <Nav />

          {/* Routes for the entire site: */}
          <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/castles" element={<AllCastles />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/" element={<Home />}/>
          </Routes>
        </Router>



          <Castle />
          <Enquiry />
          <AllEnquiries />
          <Enquiryform />
          <AdminDashboard />
          <AddCastle />
          <EditCastle />
          <Footer />
      </body>
    </>
  );
}

export default App;
