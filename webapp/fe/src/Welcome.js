import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Welcome() {

  const linkStyle = {
    color: 'wheat'
  }


  return (
    <section className="landing">
      <div class='column'></div>
      <div class='column' >
        <Link style={linkStyle} to='/admin'>
          <button class='button is-large is-fullwidth is-rounded is-link' >Admin</button>
        </Link>
      </div>
      <div class='column'>
        <Link style={linkStyle} to='/prof'>
          <button class='button is-large is-fullwidth is-rounded is-link'>Professor</button>
        </Link>
      </div>
    </section>
  );
}

export default Welcome;
