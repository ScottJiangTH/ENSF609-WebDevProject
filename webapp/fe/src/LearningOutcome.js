import 'bulma/css/bulma.css';
import React from 'react'
import Connect from './Connect';
import { Link } from 'react-router-dom';

// ga represents a list of GraduateAttributes that has an ID and a description
const ga = [
    { gid: 'A1', description: 'A knowledge base for engineering' },
    { gid: 'A2', description: 'Problem analysis' },
    { gid: 'A3', description: 'Investigation' },
    { gid: 'A4', description: 'Design' },
    { gid: 'A5', description: 'Use of engineering tools' },
    { gid: 'A6', description: 'Individual and team work' },
    { gid: 'A7', description: 'Communication skills' },
    { gid: 'A8', description: 'Professionalism' },
    { gid: 'A9', description: 'Impact of engineering on society/environment' },
    { gid: 'A10', description: 'Ethics and equity' },
    { gid: 'A11', description: 'Economics and project management' },
    { gid: 'A12', description: 'Life-long learning' }
];

// il represents a list of InstructionLevel that has an ID and a description
const il = [
    { label: 'Applied' },
    { label: 'Introduced' },
    { label: 'Developed' }
];

const connect = new Connect();

var initialState = [];

const defaultOutcome = {
    description: "",
    graduateAttributes: [{
        gid: "A1",
        description: "A knowledge base for engineering",
        instructionLevel: "Applied",
    }]
};


export default class LearningOutcome extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        var self = this;
        connect.getCourse(this.props.match.params.courseNumber).then((response) => {
            console.log(response);
            self.setState({ ...this.state, course: response });
            initialState=this.state;
        });
    }

    state = {
        deleteID: 0,
        editID: 0,
        tempoutcome: {
            description: "",
            graduateAttributes:
                [
                    {
                        gid: "A1",
                        description: "A knowledge base for engineering",
                        instructionLevel: "Applied",
                    }]

        },

        course: {
            outcomes: [
                {
                    oid: 1,
                    description: "Have a deep understanding, and practical knowledge of object oriented analysis, design, and development.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A1",
                            description: "A knowledge base for engineering",
                            instructionLevel: "Applied",
                            oid: 1
                        }
                    ]
                },
                {
                    oid: 2,
                    description: "Design and develop software programs in Java.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A4",
                            description: "Design",
                            instructionLevel: "Applied",
                            oid: 2
                        }
                    ]
                },
                {
                    oid: 3,
                    description: "Define the concepts of object-oriented design, such as inheritance and polymorphism.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A2",
                            description: "Problem analysis",
                            instructionLevel: "Applied",
                            oid: 3
                        }
                    ]
                },
                {
                    oid: 4,
                    description: "Apply miscellaneous programming concepts in Java, such as cloning, generic types, multi-threading, event-based programming, etc.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A5",
                            description: "Use of engineering tools",
                            instructionLevel: "Applied",
                            oid: 4
                        }
                    ]
                },
                {
                    oid: 5,
                    description: "Design and develop client-server applications.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A4",
                            description: "Design",
                            instructionLevel: "Applied",
                            oid: 5
                        }
                    ]
                },
                {
                    oid: 6,
                    description: "Use databases to store and retrieve information.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A3",
                            description: "Investigation",
                            instructionLevel: "Developed",
                            oid: 6
                        }
                    ]
                },
                {
                    oid: 7,
                    description: "Use different design and development utilities and tools.",
                    courseNumber: "ENSF 408",
                    graduateAttributes: [
                        {
                            gid: "A5",
                            description: "Use of engineering tools",
                            instructionLevel: "Developed",
                            oid: 7
                        }
                    ]
                }
            ]
        }

    }
    
    handleSave(event) {
        if (this.state === initialState) {
          alert('No changes to be saved');
        } else {
          connect.updateCourse(this.state.course);
          initialState = this.state;
          alert(this.state.course.courseName + ' saved. Please proceed to next section.');
        }
      }
      handleClear(event) {
        var self = this;
        connect.getCourse(this.props.match.params.courseNumber).then((response) => {
          console.log(response);
          self.setState({ ...this.state, course: response });
        });
        alert('All fields cleared.');
      }
      updateCourseNum(event) {
        this.setState({
          ...this.state, course: {
            ...this.state.course,
            courseNumber: event.target.value
          }
        });
      }
    updateOutGA(event) {
        let desc = ga.find(({ gid }) => gid === event.target.value).description;
        this.setState({
            tempoutcome: {
                ...this.state.tempoutcome,
                graduateAttributes: [{ ...this.state.tempoutcome.graduateAttributes[0], description: desc, gid: event.target.value }],
            }
        });
    }

    updateOutIL(event) {
        //this.setState({ tempoutcome : { ...this.state.tempoutcome.graduateAttributes[0], instructionLevel: event.target.value } });
        this.setState({
            tempoutcome: {
                ...this.state.tempoutcome,
                graduateAttributes: [{ ...this.state.tempoutcome.graduateAttributes[0], instructionLevel: event.target.value }],
            }
        });
    }
    updateDesc(event) {
        this.setState({ tempoutcome: { ...this.state.tempoutcome, description: event.target.value } });
    }
    updateDeleteID(event) {
        this.setState({ deleteID: Number(event.target.value) });
    }
    updateEditID(event) {
        this.setState({ editID: Number(event.target.value) });
    }

    handleAddOutcomeClick() {
        if (this.state.tempoutcome.description === "") {
            return;
        }
        this.setState({
            tempoutcome: defaultOutcome,
            course: {
                ...this.state.course,
                outcomes: [...this.state.course.outcomes, this.state.tempoutcome]
            }
        });
    }

    handleEditRowClick() {
        if (this.state.editID === -1) {
            return;
        }
        let outcs = this.state.course.outcomes;
        let outc = { ...outcs[this.state.editID] }
        outc.graduateAttributes = this.state.tempoutcome.graduateAttributes;
        outcs[this.state.editID] = outc

        this.setState({
            tempoutcome: defaultOutcome,
            course: {
                ...this.state.course,
                outcomes: outcs
            }
        });
        console.log(this.state)
    }

    handleDeleteRowClick() {
        if (this.state.deleteID === -1) {
            return;
        }
        let outcs = [...this.state.course.outcomes];
        outcs.splice(this.state.deleteID, 1)
        this.setState({
            course: {
                ...this.state.course,
                outcomes: outcs
            }
        });
    }

    renderTable1Data() {
        return this.state.course.outcomes.map((outcome, index) => {
            const { description } = outcome //destructuring
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }

    renderTable1() {
        return (
            <div>
                <table class="table" id='outcomes'>
                    <tbody>
                        {this.renderTable1Data()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderTable2Data() {
        return this.state.course.outcomes.map((outcome, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{outcome.graduateAttributes[0].gid + " : " + outcome.graduateAttributes[0].description}</td>
                    <td>{outcome.graduateAttributes[0].instructionLevel}</td>
                </tr>
            )
        })
    }

    renderTable2() {
        return (
            <div>
                <table class="table" id='attributes'>
                    <thead>
                        <tr>
                            <th>Learning Outcome</th>
                            <th>Graduate Attribute</th>
                            <th>Instruction Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable2Data()}
                    </tbody>
                </table>
            </div>
        )
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
                                <h3 class="title is-3">Learning Outcomes</h3>
                            </div>
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
                                {this.renderTable1()}
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Adding Learning Outcome</label>
                        <div class="columns">
                            <div class='column is-three-quarter'>
                                <input class="textarea" placeholder="Pleas Input Outcome Description"
                                    value={this.state.tempoutcome.description}
                                    onChange={evt => this.updateDesc(evt)} >
                                </input>
                            </div>
                            <div class='column is-one-quarter'>
                                <button class="button is-link is-centered"
                                    onClick={this.handleAddOutcomeClick.bind(this)}>
                                    Add Outcome
                                    </button>
                            </div>
                        </div>
                        <div class="columns">
                            <div class='column'>
                                <label class="label">Deleting Learning Outcome</label>
                            </div>
                            <div class='column is-half'>
                                <p>Learning Outcome</p>
                                <div class="select is-small">
                                    <select value={this.state.deleteID}
                                        onChange={evt => this.updateDeleteID(evt)}>
                                        {this.state.course.outcomes.map((outcome, index) => (
                                            <option value={index}>{index + 1}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class="column mr-4">
                                <button class="button is-link"
                                    onClick={this.handleDeleteRowClick.bind(this)}
                                >
                                    Delete Outcome</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section m-6 has-background-link-light">
                    <div class='container has-text-left'>
                        <div class='columns is-mobile is-left'>
                            <div class='column is-12'>
                                <h2 class='title is-3'>Graduate Attribute Mapping Table</h2>
                                {this.renderTable2()}
                            </div>
                        </div>
                    </div>
                    <div class="field mt-3">
                        <div class="columns">
                            <div class="column">
                                <label class="label">
                                    Edit Row</label>
                            </div>
                            <div class="column">
                                <p>Learning Outcome</p>
                                <div class="select is-small">
                                    <select value={this.state.editID}
                                        onChange={evt => this.updateEditID(evt)}>
                                        {this.state.course.outcomes.map((outcome, index) => (
                                            <option value={index}>{index + 1}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class="column">
                                <p>Graduate Attribute</p>
                                <div class="select is-small">
                                    <select value={this.state.tempoutcome.outGA}
                                        onChange={evt => this.updateOutGA(evt)}>
                                        {ga.map((option) => (
                                            <option value={option.gid}>{option.gid + " : " + option.description}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class="column">
                                <p>Instruction Level</p>
                                <div class="select is-small">
                                    <select value={this.state.tempoutcome.outIL}
                                        onChange={evt => this.updateOutIL(evt)}>
                                        {il.map((option) => (
                                            <option value={option.label}>{option.label}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class="column"
                                onClick={this.handleEditRowClick.bind(this)}
                            >
                                <button class="button is-link is-centered">Edit Row</button>
                            </div>
                        </div>
                        <div class="columns">
                            <div class='column'>
                                <label class="label">Deleting Row</label>
                            </div>
                            <div class='column'></div>
                            <div class='column'>
                                <p>Learning Outcome</p>
                                <div class="select is-small">
                                    <select value={this.state.deleteID}
                                        onChange={evt => this.updateDeleteID(evt)}>
                                        {this.state.course.outcomes.map((outcome, index) => (
                                            <option value={index}>{index + 1}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div class='column'></div>
                            <div class="column ml-6">
                                <button class="button is-link"
                                    onClick={this.handleDeleteRowClick.bind(this)}
                                >
                                    Delete Row</button>
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

                <section class='columns m-6'>
                    <div class='column'></div>
                    <div class='column'>
                        <button class='button is-link' onClick={evt => this.handleSave(evt)} >Save Changes</button>
                    </div>
                    <div class='column'>
                        <button class='button is-link'onClick={evt => this.handleClear(evt)} >Clear Content</button>
                    </div>
                    <div class='column'>
                        <Link to={`/prof/form/finalgrade/${this.props.match.params.courseNumber}`}>
                            <button class='button is-link'>Proceed to Next Section</button>
                        </Link>

                    </div>
                    <div class='column'></div>
                </section>
            </html >
        );
    }
}
