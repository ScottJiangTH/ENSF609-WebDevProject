import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import CourseInfo from './CourseInfo';
import LearningOutcome from './LearningOutcome';
import FinalGrade from './FinalGrade';
import reportWebVitals from './reportWebVitals';
import CredentialBar from './CredentialsBar';
import ProfFormBar from './ProfFormBar';
import ProfPage from './ProfPage'
import Welcome from './Welcome';
import PageNotFound from './PageNotFound';
import ExistingForm from './ExistingForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div classname= 'index'>
        <CredentialBar />
          <Route path="/" exact component={Welcome}/>
          <Route path="/prof" exact component={ProfPage}/>
          <Route path="/admin" component={PageNotFound} />
          <Route path="/prof/new" component={ProfFormBar}/>
          <Route path="/prof/existing" component={ExistingForm}/>
          <Route path="/prof/new/courseinfo" component = {CourseInfo}/> 
          <Route path="/prof/new/learningoutcome" component = {LearningOutcome}/> 
          <Route path="/prof/new/finalgrade" component = {FinalGrade}/> 

      </div>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
