import React from 'react';
import './index.css';

function Welcome() {

  return (
    <section className="landing">
        <div class='column'></div>
                    <div class='column' >
                        <button class='button is-large is-fullwidth is-rounded is-link' >Admin</button>
                    </div>
                    <div class='column'>
                        <button class='button is-large is-fullwidth is-rounded is-link'>Professor</button>
                    </div>
    </section>
  );
}

export default Welcome;
