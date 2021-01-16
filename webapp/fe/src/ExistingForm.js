import 'bulma/css/bulma.css';
import React from 'react';
import Connect from './Connect';
import { Link } from 'react-router-dom';

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
        connect.getCourses().then((response) => {
            console.log(response);
            self.setState({ courses: response.data })
        });
    }

    renderData() {

        return (

            this.state.courses.map(course =>
                <tr key={course.courseNumber}>
                    <td>{course.courseNumber}: {course.courseName}</td>
                    <td>

                        <Link to="/prof/form/courseinfo/${course.courseNumber}">
                            <button class='button is-link'>edit</button>
                        </Link>
                    </td>

                    <td>
                        <Link to="/prof/form/courseinfo/${course.courseNumber}">
                            <button class='button is-primary'>view pdf</button>
                        </Link>
                    </td>
                </tr>
            )
        )

    }

    renderTable() {
        return (
            <div>
                <table class="table is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Courses</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {

        return (
            <section >
                <div> ' '</div>
                <h3 class="title is-3" align='center'>Existing Courses</h3>
                <section className="existing">
                    <div>
                        {this.renderTable()}
                    </div>
                </section>
            </section>
        )
    }
}