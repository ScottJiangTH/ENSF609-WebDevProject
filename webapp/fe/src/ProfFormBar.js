import React from 'react';
import './index.css';

function ProfFormBar(){

    return(
        <nav className='ProfBar'> 
            <ul className='ProfLinks'>
                <li>Course Information</li>
                <li>Learning Outcome</li>
                <li>Final Grade</li>
            </ul>
        </nav>

    );
}

export default ProfFormBar;