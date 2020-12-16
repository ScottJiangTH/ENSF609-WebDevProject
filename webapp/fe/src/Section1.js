import 'bulma/css/bulma.css';

// Section 1 
function Section1() {
  return (
    <html>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Course Outline Builder</h1>
            <h2 class="subtitle">1. Calendar Information</h2>
          </div>
        </div>
      </section>
      <section>
        <div class="field m-6">
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

export default Section1;
