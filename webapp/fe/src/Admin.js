import 'bulma/css/bulma.css';
import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Admin extends React.Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <html>
                <section class="hero is-dark has-bg-img">
                    <div class="hero-body">
                        <div class='columns'>
                            <div class='column'>
                                <img is-bg-img alt="logo"
                                    src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                            </div>
                            <div class='column has-text-right'>
                                <h1 class="title is-1">Admin View</h1>
                                <h3 class="title is-3">Log-in Page</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section class='section m-6'>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Admin Account" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-check-square"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type="password" placeholder="Password" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                </section>
                <section class='columns m-6'>
                    <div class='column'>
                        {this.renderRedirect()}
                        <button class='button is-link' onClick={this.setRedirect}>Switch To Instructor View</button>
                    </div>
                </section>
            </html>
        );
    }
}