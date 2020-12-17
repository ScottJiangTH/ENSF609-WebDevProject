import 'bulma/css/bulma.css';
import React from 'react'

const initialState = {
  courseInfo: {
    courseNum: '',
    courseName: '',
    description: '',
    courseCredit: 3,
    lectureHours: 0,
    labHours: 0,
    calendarRef: ''
  }
};
const options = [
  { label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 },
  { label: "4", value: 4 }, { label: "5", value: 5 }, { label: "6", value: 6 }
];
export default class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleSave.bind(this);
  }

  handleSave(event) {
    if (this.state == initialState) {
      alert('No changes to be saved');
    } else {
      alert(this.state.courseInfo.courseName + ' saved. Please proceed to next section.');
    }
  }
  handleClear(event) {
    this.setState(initialState);
    alert('All fields cleared.');
  }
  updateCourseNum(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, courseNum: event.target.value } });
  }
  updateCourseName(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, courseName: event.target.value } });
  }
  updateDescription(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, description: event.target.value } });
  }
  updateCredit(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, courseCredit: event.target.value } });
  }
  updateLecture(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, lectureHours: event.target.value } });
  }
  updateLab(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, labHours: event.target.value } });
  }
  updateURL(event) {
    this.setState({ courseInfo: { ...this.state.courseInfo, calendarRef: event.target.value } });
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
            <input class="input" type="text" placeholder="e.g. ENSF 409"
              value={this.state.courseInfo.courseNum}
              onChange={evt => this.updateCourseNum(evt)}></input>
          </div>
          <div class="control">
            <label class="label">Course Name</label>
            <input class="input" type="text"
              placeholder="e.g. Principles of Software Development"
              value={this.state.courseInfo.courseName}
              onChange={evt => this.updateCourseName(evt)}></input>
          </div>
          <div class="control">
            <label class="label">Course Description</label>
            <textarea class="textarea"
              placeholder="A brief Description of the Course"
              value={this.state.courseInfo.description}
              onChange={evt => this.updateDescription(evt)}></textarea>
          </div>
          <div class="control">
            <label class="label">Academic Credit</label>
            <div class="select is-small">
              <select value={this.state.courseInfo.courseCredit}
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
                {this.state.courseInfo.courseCredit + ' unit; H (' +
                  this.state.courseInfo.lectureHours + '-' +
                  this.state.courseInfo.labHours + ')'}
              </div>
              <div class='column has-text-right'><label class="label-6">Lecture Hours</label></div>
              <div class='column'>
                <div class="select is-small">
                  <select value={this.state.courseInfo.lectureHours}
                    onChange={evt => this.updateLecture(evt)}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>))}
                  </select>
                </div>
              </div>
              <div class='column has-text-right'><label class="label-6">Lab Hours</label></div>
              <div class='column'>
                <div class="select is-small">
                  <select value={this.state.courseInfo.labHours}
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
              value={this.state.courseInfo.calendarRef}
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
            <button class='button is-link'>Proceed to Next Section</button>
          </div>
          <div class='column'></div>
        </section>
      </html>
    );
  }
}