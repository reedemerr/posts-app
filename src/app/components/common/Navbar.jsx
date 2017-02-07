import React from 'react';
import { Link } from 'react-router';

function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Posts App</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
