import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function CredentialBar() {

    const linkStyle={
        colour:'wheat'
    }

    return (
        <nav className='CrBar'>
            <h3> </h3>
            <ul className='CrLinks'>
                <Link style={linkStyle} to='/admin'>
                    <li>Admin</li>
                </Link>
                <Link style={linkStyle} to='/prof'>
                    <li>Professor</li>
                </Link>
               
            </ul>
        </nav>

    );
}

export default CredentialBar;