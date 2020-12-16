import 'bulma/css/bulma.css';

// Section 2
function Section2() {


    return (
        <html>
            <section class="hero is-primary has-bg-img">
                <div class="hero-body">
                    <img is-bg-img src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                    <div class="container has-text-right">
                        <h1 class="title">Course Outline Builder</h1>
                        <h2 class="subtitle">2. Learning Outcomes</h2>
                    </div>
                </div>
            </section>
            <section>
                <div class='container has-text-left'>
                    <div class='columns is-mobile is-left'>
                        <div class='column is-8'>
                            <div>
                                <h2 class='subtitle'>Learning Outcomes</h2>
                                <table class='table'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
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
                </div>
            </section>

            <section>
                <div class="field m-6">
                    <div class="control">
                        <label class="label">Adding Learning Outcome</label>
                        <input class="input" type="text" placeholder="Pleas Input Outcome Description"></input>
                    </div>

                    <div class="buttons is-left m-6">
                        <button class="button is-link">Add Outcome</button>
                    </div>

                    <div class="column is-full">
                        <div class="select is-right">
                            <select>
                                <option selected>3</option>
                                <option>4</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-full">
                        <div class="buttons is-left m-6 is-one-quarter">
                            <button class="button is-danger">Delete Outcome</button>
                        </div>
                    </div>
                    <div class="column is-four-fifths">
                        <body>Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.</body>
                    </div>
                </div>
            </section>

            <section>
                <div class='container has-text-left'>
                    <div class='columns is-mobile is-left'>
                        <div class='column is-8'>
                            <div>
                                <h2 class='subtitle'>Learning Outcomes</h2>
                                <table class='table'>
                                    <thead>
                                        <tr>
                                            <th>Learning Outcome</th>
                                            <th>Graduate Attribute</th>
                                            <th>Graduate Attribute</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>A1. A knowledge base for engineering</td>
                                            <td>A (Applied)</td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>A2. A knowledge base for engineering</td>
                                            <td>A (Applied)</td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>A3. A knowledge base for engineering</td>
                                            <td>D (Developed)</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="field m-6">
                    <div class="control">
                        <label class="label">Learning Outcome</label>
                    </div>

                    <div class="column is-full">
                        <div class="select is-right">
                            <select>
                                <option selected>3</option>
                                <option>4</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>

                    <div class="buttons is-left m-6">
                        <button class="button is-link">Add Outcome</button>
                    </div>

                    <div class="column is-full">
                        <div class="select is-right">
                            <select>
                                <option selected>3</option>
                                <option>4</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="column is-full">
                        <div class="buttons is-left m-6 is-one-quarter">
                            <button class="button is-danger">Delete Outcome</button>
                        </div>
                    </div>
                    <div class="column is-four-fifths">
                        <body>Enter your course's learning outcomes below and resize the row heights as necessary to display all text. Once you have entered your learning outcomes, complete the graduate attribute mapping table directly below the list of learning outcomes. Ensure that the number in the "Learning Outcome" column corresponds to the number in your list of learning outcomes.</body>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div class="control">
                        <label class="label">Course Name</label>
                        <input class="input" type="text" placeholder="e.g. Principles of Software Development"></input>
                    </div>
                    <div class="control">
                        <label class="label">Course Description</label>
                        <textarea class="textarea is-success" placeholder="A brief Description of the Course"></textarea>
                    </div>
                    <div class="control has-icons-left">
                        <label class="label">Course Hours</label>
                        <div class="select is-small">
                            <select>
                                <option selected>3 units; H (3-2)</option>
                                <option>4 units; H (4-4)</option>
                                <option>2 units; H (2-2)</option>
                                <option>1 units; H (1-1)</option>
                            </select>
                        </div>
                        <span class="icon is-small is-left">
                            <i class="fas fa-globe"></i>
                        </span>
                    </div>
                    <div class="control has-icons-left">
                        <label class="label">Academic Credit</label>
                        <div class="select is-small">
                            <select>
                                <option selected>3</option>
                                <option>4</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </div>
                        <span class="icon is-small is-left">
                            <i class="fas fa-globe"></i>
                        </span>
                    </div>
                    <div class="control">
                        <label class="label">Calendar Reference</label>
                        <input class="input" type="text" placeholder="e.g. http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"></input>
                    </div>
                </div>
            </section>
            <section>
                <div class="buttons is-centered m-6">
                    <button class="button is-link">Confirm</button>
                    <button class="button is-danger">Clear</button>
                </div>
            </section>
        </html>
    );
}

export default Section2;