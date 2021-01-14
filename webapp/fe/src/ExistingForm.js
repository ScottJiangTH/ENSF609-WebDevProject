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
        connect.getCourses().then(function(result){
            console.log(result);
            self.setState({ courses:  result.data})
        });
    }

    render() {
        return (
            <div  className="customers--list">
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>Course Number</th>
            </tr>
            </thead>
            <tbody>
            {this.state.courses}
            </tbody>
            </table>
        </div>
        )
    }
}