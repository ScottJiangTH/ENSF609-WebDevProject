import 'bulma/css/bulma.css';
import React from 'react'

class FinalGrade extends React.Component {
    state = {
        outcome: [], // include id, description, gaId, ilId
        category: [], // include cat, element1, element2, au
        section:[], // include lecture:{sectionCount, hourPerWeek, stuPerSup}, tutotial{}, lab{}
        labExp:[] // type, numOfLab, safetyTaught, safetyExamed
    }

    render(){
        return (
            <html>
                <section class="hero is-dark has-bg-img">
                    <div class="hero-body">
                        <img is-bg-img alt="logo" src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                        <div class="container has-text-right">
                            <h1 class="title">Course Outline Builder</h1>
                            <h1 class="subtitle">7. Final Grade Determination</h1>
                        </div>
                    </div>
                </section>
                <section class="section m-6">
                    <block>The final grade in this course will be based on the following components:</block>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Component</label>
                        </div>
                        <div class="column">
                            <label class="label">Learning Outcome(s) Evaluated</label>
                        </div>
                        <div class="column">
                            <label class="label">Weight</label>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Assignments</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="1-7"></input>
                        </div>
                        <div class="column">
                            <input class="input" type="percentage" placeholder="%"></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Project</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="1-7"></input>
                        </div>
                        <div class="column">
                            <input class="input" type="percentage" placeholder="%"></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Midterm Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="1-7"></input>
                        </div>
                        <div class="column">
                            <input class="input" type="percentage" placeholder="%"></input>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <label class="label">Final Examination</label>
                        </div>
                        <div class="column">
                            <input class="input" type="text" placeholder="1-7"></input>
                        </div>
                        <div class="column">
                            <input class="input" type="percentage" placeholder="%"></input>
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
                            <input class="input" type="percentage" placeholder="%"></input>
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
                                <div class='column is-two-fifth'></div>
                                <div class='column is-one-fifth'>
                                    {'T >='}
                                </div>
                                <div class='column is-two-fifth'>
                                    <input class="input" type="percentage" placeholder="%"></input>
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

export default FinalGrade;