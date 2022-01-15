import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, UnorderedList } from '../styled/navigation';
import jfjcastle from '../images/jfjcastle.png'

const Navigation =() => {
    return (
        <Nav>
            <UnorderedList>
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/castles" className="active">Jumping Castles</Link></li>
                <li><Link to="/about" className="active">About</Link></li>
            </UnorderedList>
            <img src={jfjcastle} alt="jfjcastle" />
        </Nav>
    );
}

export default Navigation;