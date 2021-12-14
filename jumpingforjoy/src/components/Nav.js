import React from 'react';
import { Link } from 'react-router-dom'

const Nav =() => {
    return (
        <div className="navarea">
            <div className="topnav">
                <Link to="/" className="active">Home</Link>
                <Link to="/castles" className="active">Jumping Castles</Link>
                <Link to="/about" className="active">About</Link>
            </div>
        </div>
    );
}

export default Nav;