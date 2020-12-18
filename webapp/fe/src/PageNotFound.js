import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function PageNotFound() {

  const linkStyle = {
    color: 'wheat'
  }

  return (
    <section className="notfound">
      <div class='column'>
          <h3> Page Does Not Exist, Please go back</h3>
      </div>
      <div class='column' >
        <Link style={linkStyle} to='/'>
          <button class='button is-large is-fullwidth is-rounded is-link' >Home</button>
        </Link>
      </div>
    </section>
    
  );
}

export default PageNotFound;
