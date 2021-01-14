import 'bulma/css/bulma.css';
import React from 'react';
import Connect from './Connect';

const connect = new Connect();

export default class ExistingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        var self = this;
        connect.getCourses().then((response) =>{
            console.log(response);
            self.setState({ courses:  response.data})
        });
    }

    render() {
        return (
            <div className="col">
                {this.state.courses.map(course => <div>{course.courseNumber}: {course.courseName}</div>)}
          </div>
        )
    }
}