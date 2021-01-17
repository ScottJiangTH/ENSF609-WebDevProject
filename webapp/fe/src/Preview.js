import 'bulma/css/bulma.css';
import React from 'react';
import Connect from './Connect';
import { Link } from 'react-router-dom';

const connect = new Connect();

export default class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseNumber: '',
            courseName: '',
            courseDescription: '',
            academicCredit: 0,
            lectureHours: 0,
            lanHours: 0,
            refUrl: '',
            outcomes: [],
            contentCategory: [],
            sections: [],
            labExperience: [],
            finalGrade: [],
            letterGrade: [],
        };
    }

    componentDidMount() {
        var self = this;
        connect.getCourse(this.props.match.params.courseNumber).then((response) => {
            console.log(response);
            self.setState({
                courseNumber: response.courseNumber,
                courseName: response.courseName,
                courseDescription: response.courseDescription,
                academicCredit: response.academicCredit,
                lectureHours: response.lectureHours,
                labHours: response.labHours,
                refUrl: response.refUrl,
                outcomes: response.outcomes,
                contentCategory: response.contentCategory,
                sections: response.sections,
                labExperiences: response.labExperiences,
                finalGrade: response.finalGrade,
                letterGrade: response.letterGrade
            })
        });
    }

    renderTable1() {
        <div class="table-container">
            <table is-bordered is-striped is-narrow is-hoverable is-fullwidth class="table">
                <thead>
                    <tr>
                        <th>Pos</th>
                    </tr>
                </thead>
            </table>
        </div>
    }

    render() {
        return (

            <html>
                <section class="hero is-dark has-bg-img">
                    <div class="hero-body">
                        <div class='columns'>
                            <div class='column'>
                                <img is-bg-img alt="logo"
                                    src="https://upload.wikimedia.org/wikipedia/en/3/3f/Schulich.png"></img>
                            </div>
                            <div class='column has-text-right'>
                                <h1 class="title is-1">Course Outline</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section m-6">
                    <div class="control">
                        <label class="label">1. Calendar Information</label>
                        <div class="control has-background-black">
                            <label class="label has-text-white" >{this.state.courseNumber}</label>
                            <label class="label has-text-white" has-background-black>{this.state.courseName}</label>
                        </div>
                        <h2>{this.state.courseDescription}</h2>
                        <div class="columns is-multiline">
                            <div class="column is-one-quarter">
                                <body>Course Hours: </body>
                            </div>
                            <div class="column is-three-quarters">
                                <body>{this.state.academicCredit} units; H ({this.state.lectureHours}-{this.state.labHours})</body>
                            </div>
                            <div class="column is-one-quarter">
                                <body>Academic Credit: </body>
                            </div>
                            <div class="column is-three-quarters">
                                <body>{this.state.academicCredit}</body>
                            </div>
                            <div class="column is-one-quarter">
                                <body>Calendar Reference: </body>
                            </div>
                            <div class="column is-three-quarters">
                                <a href={this.state.refUrl}>{this.state.refUrl}</a>
                            </div>
                        </div>

                    </div>
                </section>

            </html>
        );
    }
}