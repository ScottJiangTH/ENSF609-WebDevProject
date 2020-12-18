import React from 'react';
import 'bulma/css/bulma.css';

export default class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://schulich.ucalgary.ca/contacts/mohammad-moshirpour">
                        <img src="https://schulich.ucalgary.ca/sites/default/files/styles/ucws_profiles_profile_picture/public/2018-12/Moshirpour%2C%20Mohammad.jpg?h=442ae63a&itok=U61g2JfA"
                            alt="moshi" width="20" height="200" />
                    </a>
                    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="">
                                Sections
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="/courseinfo">
                                    Course Information
                                </a>
                                <a class="navbar-item" href="/learningoutcomes">
                                    Learning Outcomes
                                </a>
                                <a class="navbar-item" href="/finalgrade">
                                    Final Grade Determination
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <a class="button" href="/admin">
                                        <span>
                                            Switch To Admin
                                        </span>
                                    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-primary" href="">
                                        <span>Download PDF</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}