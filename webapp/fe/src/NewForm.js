import 'bulma/css/bulma.css';
import React from 'react'
import Connect from './Connect';
import { Link } from 'react-router-dom';

const connect = new Connect();
const initialState = {
    course: {
        courseNumber: '',
        courseName: '',
        outcomes: [],
        contentCategory: [],
        sections: [],
        labExperience: [],
        finalGrade: [{
                assignmentsOutcomes: '0',
                projectOutcomes: '0',
                midtermOutcomes: '0',
                finalOutcomes: '0',
                assignmentsWeight: 25,
                projectWeight: 25,
                midtermWeight: 25,
                finalWeight: 25 
            },],
        letterGrade: [{
            apLow: 95, aLow: 90, amLow: 85, bpLow: 80, bLow: 75, bmLow: 70, cpLow: 65, cLow: 60, cmLow: 56, dpLow: 53, dLow: 50, fLow: 0,
            apHigh: 100, aHigh: 95, amHigh: 90, bpHigh: 85, bHigh: 80, bmHigh: 75, cpHigh: 70, cHigh: 65, cmHigh: 60, dpHigh: 56, dHigh: 53, fHigh: 50
        },],
    }
};

export default class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleClick = this.handleNewForm.bind(this);
    }

    updateCourseNumber(event) {
        this.setState({ course: { ...this.state.course, courseNumber: event.target.value } });
    }
    updateCourseName(event) {
        this.setState({ course: { ...this.state.course, courseName: event.target.value } });
    }

    handleNewForm(event) {
        connect.createCourse(this.state.course).then((response) => {
            console.log(response);
            alert("The course " + response.data.courseNumber + " " + this.state.course.courseName + " is created.");
        });
    }

    render() {
        return (
            <div>
                <section className="hero is-dark has-bg-img" >
                    <div className="hero-body">
                        <div className='columns'>
                            <div className='column'>
                                <img is-bg-img alt="logo"
                                    src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                            </div>
                            <div className='column has-text-right'>
                                <h1 className="title is-1">Course Outline Builder</h1>
                                <h3 className="title is-3">Create New Form</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section m-6'>
                    <div className="control">
                        <label className="label">Course Number</label>
                        <input className="input" type="text" placeholder="e.g. ENSF 409"
                            value={this.state.courseNumber}
                            onChange={evt => this.updateCourseNumber(evt)}></input>
                    </div>
                    <div className="control">
                        <label className="label">Course Name</label>
                        <input className="input" type="text"
                            placeholder="e.g. Principles of Software Development"
                            value={this.state.courseName}
                            onChange={evt => this.updateCourseName(evt)}></input>
                    </div>
                </section>
                <section className='columns m-6'>
                    <Link to={`/prof/form/courseinfo/${this.state.course.courseNumber}`} activeClassName="active">
                        <button class='button is-link' onClick={evt => this.handleNewForm(evt)} >Start Building Form</button>
                    </Link>
                </section>
            </div>
        );
    }
}