import 'bulma/css/bulma.css';

// Section 2
function Section2() {


    return (
        <html>
            <section class="hero is-dark has-bg-img">
                <div class="hero-body">
                    <img is-bg-img src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                    <div class="container has-text-right">
                        <h1 class="title">Course Outline Builder</h1>
                        <h2 class="subtitle">2. Learning Outcomes</h2>
                    </div>
                </div>
            </section>
            <section class="section m-6">
                <div class='container has-text-left'>
                    <div class='columns is-mobile is-left'>
                        <div class='column is-12'>
                            <body>Enter your course's learning outcomes below. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.</body>
                            <body class="mt-3 mb-3">* Grey area will not show on final PDF.</body>
                            <h2 class='title is-3'>List of Learning Outcomes</h2>
                            <body>At the end of this course, you will be able to:</body>
                            <table class='table is-hoverable is-striped'>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Design and develop software programs in Java.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Define the concepts of object-oriented design, such as inheritance and polymorphism.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Adding Learning Outcome</label>
                    <div class="level">
                        <div class='level-item'>
                            <input class="textarea" placeholder="Pleas Input Outcome Description"></input>
                        </div>
                        <div class='level-item'>
                            <button class="button is-link is-centered">Add Outcome</button>
                        </div>
                    </div>
                    <div class="level">
                        <label class="label mr-6">Deleting Learning Outcome</label>
                        <p class="level-left ml-6">Learning Outcome</p>
                        <div class="level-left">
                            <div class="select is-small">
                                <select class="select">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="level-item">
                            <button class="button is-link">Delete Outcome</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section m-6 has-background-link-light">
                <div class='container has-text-left'>
                    <div class='columns is-mobile is-left'>
                        <div class='column is-12'>
                            <h2 class='title is-3'>Graduate Attribute Mapping Table</h2>
                            <table class='table'>
                                <thead>
                                    <tr>
                                        <th>Learning Outcome</th>
                                        <th>Graduate Attribute</th>
                                        <th>Instruction Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>A1. A knowledge base for engineering</td>
                                        <td>A (Applied)</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>A2. A knowledge base for engineering</td>
                                        <td>A (Applied)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>A3. A knowledge base for engineering</td>
                                        <td>D (Developed)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="field mt-1">
                    <div class="control">
                        <label class="label">Adding New Row</label>
                    </div>
                    <div class="level">
                        <p class="level-item">Learning Outcome</p>
                        <div class="level-left">
                            <div class="select is-small">
                                <select class="select">
                                    <option>4</option>
                                    <option selected>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                        <p class="level-item">Graduate Attribute</p>
                        <div class="level-item">
                            <div class="select is-small">
                                <select class="select">
                                    <option selected>A1. A knowledge base for engineering</option>
                                    <option>A2. Problem analysis</option>
                                    <option>A3. Investigation</option>
                                    <option>A4. Design</option>
                                    <option>A5. Use of engineering tools</option>
                                    <option>A6. Individual and team work</option>
                                    <option>A7. Communication skills</option>
                                    <option>A8. Professionalism</option>
                                    <option>A9. Impact of engineering on society/environment</option>
                                    <option>A10. Ethics and equity</option>
                                    <option>A11. Economics and project management</option>
                                    <option>A12. Life-long learning</option>
                                </select>
                            </div>
                        </div>
                        <p class="level-item">Instruction Level</p>
                        <div class="level-item">
                            <div class="select is-small">
                                <select class="select">
                                    <option>A (Applied)</option>
                                    <option>D (Developed)</option>
                                    <option>I (Introduced)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="level-item">
                        <button class="button is-link">Add Row</button>
                    </div>
                    <div class="level">
                        <label class="label mr-6">Deleting Row</label>
                        <p class="level-left ml-6">Learning Outcome</p>
                        <div class="level-left">
                            <div class="select is-small">
                                <select class="select">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="level-item">
                            <button class="button is-link">Delete Row</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section m-6 has-background-link-light">
                <h2 class='title is-3'>Course Content Categories</h2>
                <div class="columns">
                    <div class="column">
                        <label class="label">Course Content Category</label>
                    </div>
                    <div class="column">
                        <label class="label">Content Element 1</label>
                    </div>
                    <div class="column">
                        <label class="label">Content Element 2</label>
                    </div>
                    <div class="column">
                        <label class="label">AU%</label>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label level-left">Math</label>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>DiffCalc</option>
                                <option>DiffEq</option>
                                <option>Discrete</option>
                                <option>IntCalc</option>
                                <option>LinAlg</option>
                                <option>NMeths</option>
                                <option>Prob</option>
                                <option>Stats</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>DiffCalc</option>
                                <option>DiffEq</option>
                                <option>Discrete</option>
                                <option>IntCalc</option>
                                <option>LinAlg</option>
                                <option>NMeths</option>
                                <option>Prob</option>
                                <option>Stats</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label level-left">Natual Science</label>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>Chem</option>
                                <option>Earth</option>
                                <option>Life</option>
                                <option>Phys</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>Chem</option>
                                <option>Earth</option>
                                <option>Life</option>
                                <option>Phys</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label level-left">Complementary Studies</label>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>EngEcon</option>
                                <option>EnvSust</option>
                                <option>H&S</option>
                                <option>HumSS</option>
                                <option>Impacts</option>
                                <option>OWComm</option>
                                <option>PEthics</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option selected>EngEcon</option>
                                <option>EnvSust</option>
                                <option>H&S</option>
                                <option>HumSS</option>
                                <option>Impacts</option>
                                <option>OWComm</option>
                                <option>PEthics</option>
                            </select>
                        </div>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label level-left">Engineering Science</label>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Engineering Design</label>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select>
                        </div>
                    </div>
                </div>
                <body class="has-text-danger">* At least one element must be selected for categories that identify AUs</body>
            </section>

            <section class="section m-6 has-background-link-light">
                <h2 class='title is-3'>Course Section Information</h2>
                <block>Ensure that the number of sections and hours per week are updated. You may leave the "Number of Students Per Supervisor" column for lecture blank.</block>
                <div class="columns mt-4">
                    <div class="column"></div>
                    <div class="column">
                        <label class="label">Number of Sections</label>
                    </div>
                    <div class="column">
                        <label class="label">Hours Per Week</label>
                    </div>
                    <div class="column">
                        <label class="label">Number of Students Per Supervisor</label>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Lecture</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Sections"></input>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Hours"></input>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>{'<5'}</option>
                                <option>5-10</option>
                                <option>10-20</option>
                                <option>20-50</option>
                                <option>{'>50'}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Tutorial</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Sections"></input>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Hours"></input>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>{'<5'}</option>
                                <option>5-10</option>
                                <option>10-20</option>
                                <option>20-50</option>
                                <option>{'>50'}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Lab</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Sections"></input>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Hours"></input>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>{'<5'}</option>
                                <option>5-10</option>
                                <option>10-20</option>
                                <option>20-50</option>
                                <option>{'>50'}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section m-6 has-background-link-light">
                <h2 class='title is-3'>Laboratory Experience</h2>
                <block>Ignore this table if the course does not have a laboratory section</block>
                <div class="columns">
                    <div class="column">
                        <label class="label">Lab Type</label>
                    </div>
                    <div class="column">
                        <div class="select is-small">
                            <select class="select">
                                <option>Hands-on</option>
                                <option>Simulation</option>
                                <option>Problem</option>
                                <option>Demo</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Number of Labs</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="12"></input>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Lab Safety Taught?</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="No"></input>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
                <div class="columns">
                    <div class="column">
                        <label class="label">Lab Safety Examined</label>
                    </div>
                    <div class="column">
                        <input class="input" type="text" placeholder="Yes"></input>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>
            </section>
        </html >
    );
}

export default Section2;