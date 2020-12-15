import 'bulma/css/bulma.css';

// Section 1 
function Section1() {
  return (
    <html>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Course Outline Builder
            </h1>
            <h2 class="subtitle">
              1. Calendar Information
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div class="field">
          <label class="label">Course Number</label>
          <div class="control">
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
        </div>
      </section>
    </html>
  );
}

export default Section1;
