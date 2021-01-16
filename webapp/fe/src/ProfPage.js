import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
function ProfPage() {

    return (
        <section className="landing">
            <div class='column'></div>
            <div class='column' >
                <Link to="/prof/new">
                    <button class='button is-large is-fullwidth is-rounded is-link' >New Form</button>
                </Link>
            </div>
            <div class='column'>
                <Link to="/prof/existing">
                    <button class='button is-large is-fullwidth is-rounded is-link'>Existing Form</button>
                </Link>
            </div>
        </section>
    );
}

export default ProfPage;