import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseInfo from './CourseInfo';
import LearningOutcome from './LearningOutcome';
import FinalGrade from './FinalGrade';
import Nav from './Nav';
import Admin from './Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path='/nav' component={Nav} />
        <Route path='/courseinfo' component={CourseInfo} />
        <Route path='/learningoutcomes' component={LearningOutcome} />
        <Route path='/finalgrade' component={FinalGrade} />
        <Route path='/admin' component={Admin} />
      </Router>
    </div>
  );
}

export default App;
