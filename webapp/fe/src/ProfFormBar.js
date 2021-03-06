import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function ProfFormBar() {

    const linkStyle = {
        color: '#232323'
    }

    return (
        <nav className='ProfBar'>
            <ul className='ProfLinks'>
                <Link style={linkStyle} to ="/prof/form/courseinfo">
                    <li>Course Information</li>
                </Link>
                <Link style={linkStyle} to ="/prof/form/learningoutcome">
                    <li>Learning Outcome</li>
                </Link>
                <Link style={linkStyle} to ="/prof/form/finalgrade">
                    <li>Final Grade</li>
                </Link>
            </ul>
        </nav>

    );
}

export default ProfFormBar;