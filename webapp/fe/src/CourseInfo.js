import 'bulma/css/bulma.css';
import React from 'react'

class CourseInfo extends React.Component {
  state = {
    courseNum: '',
    courseName: '',
    courseHours: '',
    courseCredit: '',
    CalendarRef: ''
  }

  render() {
    return (
      <html>
        <section class="hero is-dark has-bg-img">
          <div class="hero-body">
            <img is-bg-img alt="logo" src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
            <div class="container has-text-right">
              <h1 class="title">Course Outline Builder</h1>
              <h2 class="subtitle">1. Calendar Information</h2>
            </div>
          </div>
        </section>
        <section class='section m-6'>
          <div class="control">
            <label class="label">Course Number</label>
            <input class="input" type="text" placeholder="e.g. ENSF 409"></input>
          </div>
          <div class="control">
            <label class="label">Course Name</label>
            <input class="input" type="text" placeholder="e.g. Principles of Software Development"></input>
          </div>
          <div class="control">
            <label class="label">Course Description</label>
            <textarea class="textarea" placeholder="A brief Description of the Course"></textarea>
          </div>
          <div class="control has-icons-left">
            <label class="label">Course Hours</label>
            <div class="select is-small">
              <select>
                <option>1 units; H (1-1)</option>
                <option>2 units; H (2-2)</option>
                <option selected>3 units; H (3-2)</option>
                <option>4 units; H (4-4)</option>
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
                <option>1</option>
                <option>2</option>
                <option selected>3</option>
                <option>4</option>
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
            <button class='button is-link'>Proceed to Next Section</button>
          </div>
          <div class='column'></div>
        </section>
      </html>
    );
  }
}

export default CourseInfo;
