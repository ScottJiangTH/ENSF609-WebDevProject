import 'bulma/css/bulma.css';
import React from 'react'
import Connect from './Connect';
import { Link } from 'react-router-dom';
//import addNumbers from "./components/addNumbers"

var initialState = {
    totalWeight: 100,
    course: {
        finalGrade: [{
            assignmentsOutcome: '1-7',
            projectOutcome: '1-7',
            midtermOutcome: '1-7',
            finalOutcome: '1-7',
            assignmentsWeight: 25,
            projectWeight: 25,
            midtermWeight: 25,
            finalWeight: 25
        }],

        letterGrade: [{
            apLow: 95, aLow: 90, amLow: 85, bpLow: 80, bLow: 75, bmLow: 70, cpLow: 65, cLow: 60, cmLow: 56, dpLow: 53, dLow: 50, fLow: 0,
            apHigh: 100, aHigh: 95, amHigh: 90, bpHigh: 85, bHigh: 80, bmHigh: 75, cpHigh: 70, cHigh: 65, cmHigh: 60, dpHigh: 56, dHigh: 53, fHigh: 50
        }]
    }
};

const connect = new Connect();

export default class FinalGrade extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {

        totalWeight: 100,
        course: {
            finalGrade: [{
                assignmentsOutcome: '1-7',
                projectOutcome: '1-7',
                midtermOutcome: '1-7',
                finalOutcome: '1-7',
                assignmentsWeight: 25,
                projectWeight: 25,
                midtermWeight: 25,
                finalWeight: 25
            }],

            letterGrade: [{
                apLow: 95, aLow: 90, amLow: 85, bpLow: 80, bLow: 75, bmLow: 70, cpLow: 65, cLow: 60, cmLow: 56, dpLow: 53, dLow: 50, fLow: 0,
                apHigh: 100, aHigh: 95, amHigh: 90, bpHigh: 85, bHigh: 80, bmHigh: 75, cpHigh: 70, cHigh: 65, cmHigh: 60, dpHigh: 56, dHigh: 53, fHigh: 50
            }]
        }
    }

    componentDidMount() {
        var self = this;
        connect.getCourse(this.props.match.params.courseNumber).then((response) => {
            console.log(response);
            initialState = response;
            self.setState({ ...this.state, course: response });
        });
    }

    handleFinalGradeChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;
        if (Number(value)){
            value=Number(value)
        }

        this.setState({
            ...this.state,
            course: {
                ...this.state.course,
                finalGrade: [{
                    ...this.state.course.finalGrade[0],
                    [name]: value
                }]
            }
        });
    }

    

    handleLetterGradeChange(event) {
        const target = event.target;
        const name = target.name;
        var value = parseInt(target.value);
        if (isNaN(value)) { value = 0 };

        this.setState({
            ...this.state,
            course: {
                ...this.state.course,
                letterGrade: [{
                    ...this.state.course.letterGrade[0],
                    [name]: value
                }]
            }
        });
    }

    handleSave(event) {
        if (this.state === initialState) {
            alert('No changes to be saved');
        } else {

            alert('All changes saved. Please proceed to next section.');
        }
    }
    handleClear(event) {
        var self = this;
        connect.getCourse(this.props.match.params.courseNumber).then((response) => {
            console.log(response);
            self.setState({ ...this.state, response });
        });
        alert('All changes cleared.');
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
                                <h1 class="title is-1">Course Outline Builder</h1>
                                <h3 class="title is-3">Final Grade</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section m-6">
                    <div class='block'>The final grade in this course will be based on the following components:</div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Component</label>
                        </div>
                        <div class="column">
                            <label class="label">Learning Outcome(s) Evaluated</label>
                        </div>
                        <div class="column">
                            <label class="label has-text-centered">Weight %</label>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Assignments</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='assignments'
                                value={this.state.course.finalGrade[0].assignmentsOutcome}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="text" name='assignments'
                                value={this.state.course.finalGrade[0].assignmentsWeight}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Project</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='project'
                                value={this.state.course.finalGrade[0].projectOutcome}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="text" name='project'
                                value={this.state.course.finalGrade[0].projectWeight}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Midterm Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='midterm'
                                value={this.state.course.finalGrade[0].midtermOutcome}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='midterm'
                                value={this.state.course.finalGrade[0].midtermWeight}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Final Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='final'
                                value={this.state.course.finalGrade[0].finalOutcome}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='final'
                                value={this.state.course.finalGrade[0].finalWeight}
                                onChange={event => this.handleFinalGradeChange(event)}></input>
                        </div>
                    </div>
                    <div class='columns'>
                        <div class='column'></div>
                        <div class='column'>
                            <button class='button is-link'>Add Grade Component</button>
                        </div>
                        <div class='column'>
                            <button class='button is-link'>Delete Grade Component</button>
                        </div>
                        <div class='column'></div>
                    </div>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column has-text-right">
                            <label class="label">Total: </label>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage"
                                placeholder="%" disabled={true}
                                value={this.state.totalWeight}></input>
                        </div>
                    </div>
                </section>

                <section class='section m-6'>
                    Notes:
                    <div class='block'>
                        a) You must either achieve at least 50% on the final exam or achieve at least 50% on the weighted average of the midterm and final exam. You must also achieve an average of at least 50% on the lab section of the course. If you do not satisfy these caveats, you will not receive a passing grade.
                    </div>
                    <div class='block'>
                        b) Circumstances beyond one’s control (e.g. sickness, etc.), leading to missing lab session and/or delays in assignment submissions should be discussed with the course instructor as soon as possible. Proper documentation must be provided.
                    </div>
                    <div class='block'>
                        c) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered.
                    </div>
                </section>

                <section class='section m-6'>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">Letter Grade</label>
                        </div>
                        <div class="column is-two-third has-text-centered">
                            <label class="label">Total Mark (T)</label>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">A+</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='ap'
                                        value={this.state.course.letterGrade[0].apLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>

                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'T <='}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='ap' disabled={true}
                                        value={this.state.course.letterGrade[0].apHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">A</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='a'
                                        value={this.state.course.letterGrade[0].aLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='a'
                                        value={this.state.course.letterGrade[0].aHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">A-</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='am'
                                        value={this.state.course.letterGrade[0].amLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='am'
                                        value={this.state.course.letterGrade[0].amHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">B+</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='bp'
                                        value={this.state.course.letterGrade[0].bpLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='bp'
                                        value={this.state.course.letterGrade[0].bpHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">B</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='b'
                                        value={this.state.course.letterGrade[0].bLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='b'
                                        value={this.state.course.letterGrade[0].bHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">B-</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='bm'
                                        value={this.state.course.letterGrade[0].bmLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='bm'
                                        value={this.state.course.letterGrade[0].bmHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">C+</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='cp'
                                        value={this.state.course.letterGrade[0].cpLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='cp'
                                        value={this.state.course.letterGrade[0].cpHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">C</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='c'
                                        value={this.state.course.letterGrade[0].cLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='c'
                                        value={this.state.course.letterGrade[0].cHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">C-</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='cm'
                                        value={this.state.course.letterGrade[0].cmLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='cm'
                                        value={this.state.course.letterGrade[0].cmHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">D+</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='dp'
                                        value={this.state.course.letterGrade[0].dpLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='dp'
                                        value={this.state.course.letterGrade[0].dpHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">D</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='d'
                                        value={this.state.course.letterGrade[0].dLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='d'
                                        value={this.state.course.letterGrade[0].dHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-one-third">
                            <label class="label">F</label>
                        </div>
                        <div class="column is-two-third">
                            <div class='columns'>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='f' disabled={true}
                                        value={this.state.course.letterGrade[0].fLow}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'   T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="number" name='f'
                                        value={this.state.course.letterGrade[0].fHigh}
                                        onChange={event => this.handleLetterGradeChange(event)}>
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class='columns m-6'>
                    <div class='column'></div>
                    <div class='column'>
                        <button class='button is-link' onClick={evt => this.handleSave(evt)}>Save Changes</button>
                    </div>
                    <div class='column'>
                        <button class='button is-link' onClick={evt => this.handleClear(evt)}>Clear Content</button>
                    </div>
                    <div class='column'>
                        <Link to={`/prof/preview/${this.props.match.params.courseNumber}`}>
                            <button class='button is-link'>Generate PDF</button>
                        </Link>
                    </div>
                    <div class='column'></div>
                </section>
            </html >
        );
    }
}