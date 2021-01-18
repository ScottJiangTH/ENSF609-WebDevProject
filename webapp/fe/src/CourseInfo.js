import 'bulma/css/bulma.css';
import React from 'react'
import Connect from './Connect';
import { Link , Redirect} from 'react-router-dom';


const options = [
  { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 },
  { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "6", value: 6 }
];

const connect = new Connect();
var initialState = {
  courseNumber: "",
  courseName: "",
  courseDescription: "",
  academicCredit: 3,
  lectureHours: 3,
  labHours: 2,
  refUrl: ""

};

export default class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleSave.bind(this);
  }

  state = {
    courseNumber: "",
    courseName: "",
    courseDescription: "",
    academicCredit: 3,
    lectureHours: 3,
    labHours: 2,
    refUrl: ""
  }

  componentDidMount() {
    var self = this;

    connect.getCourse(this.props.match.params.courseNumber).then((response) => {
      console.log(response);
      self.setState(response );
    });
  }

  handleSave(event) {
    if (this.state === initialState) {
      alert('No changes to be saved');
    } else {
      connect.deleteCourse(this.state);
      connect.createCourse(this.state);
      initialState=this.state;
      alert(this.state.courseName + ' saved. Please proceed to next section.');
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
    this.setState({ courseNumber: event.target.value });
  }
  updateCourseName(event) {
    this.setState({ courseName: event.target.value });
  }
  updateDescription(event) {
    this.setState({ courseDescription: event.target.value });
  }
  updateCredit(event) {
    this.setState({ academicCredit: Number(event.target.value) });
  }
  updateLecture(event) {
    this.setState({ lectureHours: Number(event.target.value) });
  }
  updateLab(event) {
    this.setState({ labHours: Number(event.target.value) });
  }
  updateURL(event) {
    this.setState({ refUrl: event.target.value });
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
                <h3 class="title is-3">Calendar Information</h3>
              </div>
            </div>
          </div>
        </section>
        <section class='section m-6'>
          <div class="control">
            <label class="label">Course Number</label>
            <input class="input" type="text" disabled placeholder="e.g. ENSF 409"
              value={this.state.courseNumber}
              onChange={evt => this.updateCourseNum(evt)}></input>
          </div>
          <div class="control">
            <label class="label">Course Name</label>
            <input class="input" type="text" disabled
              placeholder="e.g. Principles of Software Development"
              value={this.state.courseName}
              onChange={evt => this.updateCourseName(evt)}></input>
          </div>
          <div class="control">
            <label class="label">Course Description</label>
            <textarea class="textarea"
              placeholder="A brief Description of the Course"
              value={this.state.courseDescription}
              onChange={evt => this.updateDescription(evt)}></textarea>
          </div>
          <div class="control">
            <label class="label">Academic Credit</label>
            <div class="select is-small">
              <select value={this.state.courseCredit}
                onChange={evt => this.updateCredit(evt)}>
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>))}
              </select>
            </div>
          </div>
          <div class="control">
            <label class="label">Course Hours</label>
            <div class='columns'>
              <div class='column'>
                {this.state.academicCredit + ' unit; H (' +
                  this.state.lectureHours + '-' +
                  this.state.labHours + ')'}
              </div>
              <div class='column has-text-right'><label class="label-6">Lecture Hours</label></div>
              <div class='column'>
                <div class="select is-small">
                  <select value={this.state.lectureHours}
                    onChange={evt => this.updateLecture(evt)}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>))}
                  </select>
                </div>
              </div>
              <div class='column has-text-right'><label class="label-6">Lab Hours</label></div>
              <div class='column'>
                <div class="select is-small">
                  <select value={this.state.labHours}
                    onChange={evt => this.updateLab(evt)}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="control">
            <label class="label">Calendar Reference</label>
            <input class="input" type="text"
              placeholder="e.g. http://www.ucalgary.ca/pubs/calendar/current/software-engineering-for-engineers.html#38252"
              value={this.state.refUrl}
              onChange={evt => this.updateURL(evt)}></input>
          </div>
        </section>
        <section class='columns m-6'>
          <div class='column'></div>
          <div class='column'>
            <button class='button is-link' onClick={evt => this.handleSave(evt)} >Save Changes</button>
          </div>
          <div class='column'>
            <button class='button is-link' onClick={evt => this.handleClear(evt)}>Clear Content</button>
          </div>
          <div class='column'>
            <Link to={`/prof/form/learningoutcome/${this.state.courseNumber}`}>
              <button class='button is-link'> Next Section </button>
            </Link>
          </div>
          <div class='column'></div>
        </section>
      </html>
    );
  }
}