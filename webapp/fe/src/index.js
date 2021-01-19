import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import CourseInfo from './CourseInfo';
import LearningOutcome from './LearningOutcome';
import FinalGrade from './FinalGrade';
import reportWebVitals from './reportWebVitals';
import CredentialBar from './CredentialsBar';
import ProfPage from './ProfPage'
import Welcome from './Welcome';
import PageNotFound from './PageNotFound';
import NewForm from './NewForm';
import ExistingForm from './ExistingForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Preview from './Preview';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className= 'index'>
        <CredentialBar />
          <Route path="/" exact component={Welcome}/>
          <Route path="/prof" exact component={ProfPage}/>
          <Route path="/admin" component={PageNotFound} />
          <Route path= "/prof/new" component={NewForm}/>
          <Route path="/prof/existing" component={ExistingForm}/>
          <Route path="/prof/form/courseinfo/:courseNumber" component = {CourseInfo}/> 
          <Route path="/prof/form/learningoutcome/:courseNumber" component = {LearningOutcome}/> 
          <Route path="/prof/form/finalgrade/:courseNumber" component = {FinalGrade}/>
          <Route path="/prof/preview/:courseNumber" component = {Preview}/>

      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
