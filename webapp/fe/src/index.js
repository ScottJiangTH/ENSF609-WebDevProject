import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CourseInfo from './CourseInfo';
import LearningOutcome from './LearningOutcome';
import FinalGrade from './FinalGrade';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CourseInfo />
    <LearningOutcome />
    <FinalGrade />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
