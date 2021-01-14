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
        connect.getCourses().then(function (result) {
            this.setState({ courses:  result.data})
        });
    }

    render() {
        return (
            <div  className="customers--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>#</th>
                <th>Course Number</th>
            </tr>
            </thead>
            <tbody>
            {this.state.courses.map( c  =>
                <tr  key={c.courseNumber}>
                <td>{c.pk}  </td>
            </tr>)}
            </tbody>
            </table>
        </div>
        )
    }
}