import 'bulma/css/bulma.css';
import React from 'react'
//import addNumbers from "./components/addNumbers"

const initialState = {
    components: {
        outcome: { assignments: '1-7', project: '1-7', midterm: '1-7', final: '1-7' },
        weight: { assignments: 25, project: 25, midterm: 25, final: 25 }
    },
    totalWeight: 100,
    chart: {
        min: { ap: 95, a: 90, am: 85, bp: 80, b: 75, bm: 70, cp: 65, c: 60, cm: 56, dp: 53, d: 50, f: 0 },
        max: { ap: 100, a: 95, am: 90, bp: 85, b: 80, bm: 75, cp: 70, c: 65, cm: 60, dp: 56, d: 53, f: 50 }
    }
};

export default class FinalGrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleOutcomeChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            components: {
                ...this.state.components,
                outcome: {
                    ...this.state.components.outcome,
                    [name]: value
                }
            }
        });
    }

    handleWeightChange(event) {
        const target = event.target;
        const name = target.name;
        const lastValue = this.state.components.weight[name];
        var value = parseInt(target.value);
        var newTotalWeight = this.state.totalWeight - lastValue + value;
        if (isNaN(value)) { value = 0 };

        this.setState({
            ...this.state,
            components: {
                ...this.state.components,
                weight: {
                    ...this.state.components.weight,
                    [name]: value
                },
            },
            totalWeight: newTotalWeight,
        });
    }

    // updateTotalWeight() {
    //     const newTotal = this.state.components.weight.assignments +
    //         this.state.components.weight.project +
    //         this.state.components.weight.midterm +
    //         this.state.components.weight.final;
    //     this.setState({ ...this.state, totalWeight: newTotal });
    // }

    handleMinMarkChange(event) {
        const target = event.target;
        const name = target.name;
        let value = parseInt(target.value);
        if (isNaN(value)) { value = 0 };

        this.setState({
            ...this.state,
            chart: {
                ...this.state.chart,
                min: {
                    ...this.state.chart.min,
                    [name]: value
                }
            }
        });
    }

    handleMaxMarkChange(event) {
        const target = event.target;
        const name = target.name;
        let value = parseInt(target.value);
        if (isNaN(value)) { value = 0 };

        this.setState({
            ...this.state,
            chart: {
                ...this.state.chart,
                min: {
                    ...this.state.chart.max,
                    [name]: value
                }
            }
        });
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
                                value={this.state.components.outcome.assignments}
                                onChange={event => this.handleOutcomeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='assignments'
                                value={this.state.components.weight.assignments}
                                onChange={event => this.handleWeightChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Project</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='project'
                                value={this.state.components.outcome.project}
                                onChange={event => this.handleOutcomeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='project'
                                value={this.state.components.weight.project}
                                onChange={event => this.handleWeightChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Midterm Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='midterm'
                                value={this.state.components.outcome.midterm} 
                                onChange={event => this.handleOutcomeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='midterm'
                                value={this.state.components.weight.midterm} 
                                onChange={event => this.handleWeightChange(event)}></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Final Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" name='final'
                                value={this.state.components.outcome.final} 
                                onChange={event => this.handleOutcomeChange(event)}></input>
                        </div>
                        <div class="column">
                            <input class="number" type="percentage" name='final'
                                value={this.state.components.weight.final} 
                                onChange={event => this.handleWeightChange(event)}></input>
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
                                    <input class="number" 
                                        value={this.state.chart.min.ap} 
                                        onChange={event => this.handleMinMarkChange(event)}></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'T <='}
                                </div>
                                <div class='column is-two-fifth'></div>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                                <div class='column is-one-fifth'>
                                    {'<= T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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
                                <div class='column is-two-fifth'></div>
                                <div class='column is-one-fifth'>
                                    {'T <'}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class='columns m-6'>
                    <div class='column'></div>
                    <div class='column'>
                        <button class='button is-link'>Save Changes</button>
                    </div>
                    <div class='column'>
                        <button class='button is-link'>Clear Content</button>
                    </div>
                    <div class='column'>
                        <button class='button is-link'>Generate PDF</button>
                    </div>
                    <div class='column'></div>
                </section>
            </html >
        );
    }
}