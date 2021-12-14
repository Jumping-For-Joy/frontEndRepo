import React from 'react';
import { Link } from 'react-router-dom'

const Nav =() => {
    return (
        <div className="navarea">
            <div className="topnav">
                <Link to="/" className="active">Home</Link>
                <Link to="/forhire" className="active">For Hire</Link>
                <Link to="/about" className="active">About</Link>
            </div>
        </div>
    );
}

export default Nav;