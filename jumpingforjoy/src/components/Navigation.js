import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, UnorderedList } from '../styled/navigation';
// import jfjcastle from './jfjcastle.png';
import jfjcastle from '../images/jfjcastle.png'


const Navigation =() => {
    
    return (
        <Nav>
            <UnorderedList>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/castles" className="active">Jumping Castles</Link></li>
                <li><Link to="/about" className="active">About</Link></li>
                { /* "Hamburger menu" / "Bar icon" to toggle the navigation links */ }
                <a href="javascript:void(0);" className="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </UnorderedList>
                <div className="img">
                        <img src={jfjcastle} alt="jfjcastle" width="10"/>
                </div>
              
        </Nav>
    );
}

export default Navigation;