import 'bulma/css/bulma.css';
import React from 'react';
import Connect from './Connect';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

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
            labHours: 0,
            refUrl: '',
            outcomes: [],
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
                finalGrade: response.finalGrade,
                letterGrade: response.letterGrade
            })
        });
    }

    renderOutcomeTable() {
        return (
            <table class="table is-hoverable is-fullwidth is-striped">
                <tbody>
                    {this.state.outcomes.map((outcome, index) => {
                        const { description } = outcome //destructuring
                        return (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    renderFinalGradeTable() {
        return (
            <div>
                {this.state.finalGrade.map(grade => {
                    return (
                        <table class="table is-bordered is-hoverable is-fullwidth is-striped">
                            <thead>
                                <tr>
                                    <th>Component</th>
                                    <th>Learning Outcome(s) Evaluated</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Assignment</td>
                                    <td>{grade.assignmentsOutcomes}</td>
                                    <td>{grade.assignmentsWeight}</td>
                                </tr>
                                <tr>
                                    <td>Project</td>
                                    <td>{grade.projectOutcomes}</td>
                                    <td>{grade.projectWeight}</td>
                                </tr>
                                <tr>
                                    <td>Midterm Examination</td>
                                    <td>{grade.midtermOutcomes}</td>
                                    <td>{grade.midtermWeight}</td>
                                </tr>
                                <tr>
                                    <td>Final Examination</td>
                                    <td>{grade.finalOutcomes}</td>
                                    <td>{grade.finalWeight}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </div>
        )
    }

    renderLetterGradeTable() {
        return (

            this.state.letterGrade.map(letter => {
                return (
                    <table class="table is-bordered is-hoverable is-striped">
                        <thead>
                            <tr>
                                <th>Letter Grade</th>
                                <th>Total Mark (T)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A+</td>
                                <td>T &#62;&#61; {letter.apHigh} </td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td> {letter.aLow} &#60;&#61; T &#60;&#61; {letter.aHigh} </td>
                            </tr>
                            <tr>
                                <td>A-</td>
                                <td> {letter.amLow} &#60;&#61; T &#60;&#61; {letter.amHigh} </td>
                            </tr>
                            <tr>
                                <td>B+</td>
                                <td> {letter.bpLow} &#60;&#61; T &#60;&#61; {letter.bpHigh} </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td> {letter.bLow} &#60;&#61; T &#60;&#61; {letter.bHigh} </td>
                            </tr>
                            <tr>
                                <td>B-</td>
                                <td> {letter.bmLow} &#60;&#61; T &#60;&#61; {letter.bmHigh} </td>
                            </tr>
                            <tr>
                                <td>C+</td>
                                <td> {letter.cpLow} &#60;&#61; T &#60;&#61; {letter.cpHigh} </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td> {letter.cLow} &#60;&#61; T &#60;&#61; {letter.cHigh} </td>
                            </tr>
                            <tr>
                                <td>C-</td>
                                <td> {letter.cmLow} &#60;&#61; T &#60;&#61; {letter.cmHigh} </td>
                            </tr>
                            <tr>
                                <td>D+</td>
                                <td> {letter.dpLow} &#60;&#61; T &#60;&#61; {letter.dpHigh} </td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td> {letter.dLow} &#60;&#61; T &#60;&#61; {letter.dHigh} </td>
                            </tr>
                            <tr>
                                <td>F</td>
                                <td> {letter.fLow} &#60;&#61; T &#60;&#61; {letter.fHigh} </td>
                            </tr>
                        </tbody>
                    </table>
                )
            })
        )
    }

    savePDF(evt) {
        htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();
          const imgProps= pdf.getImageProperties(dataUrl);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(dataUrl, 'PNG', 0, 0,pdfWidth, pdfHeight);
          pdf.save("preview.pdf"); 
        });

    }

    render() {
        return (
            <div id='divToPrint'>
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
                                <b>Course Hours: </b>
                            </div>
                            <div class="column is-three-quarters">
                                <b>{this.state.academicCredit} units; H ({this.state.lectureHours}-{this.state.labHours})</b>
                            </div>
                            <div class="column is-one-quarter">
                                <b>Academic Credit: </b>
                            </div>
                            <div class="column is-three-quarters">
                                <b>{this.state.academicCredit}</b>
                            </div>
                            <div class="column is-one-quarter">
                                <b>Calendar Reference: </b>
                            </div>
                            <div class="column is-three-quarters">
                                <a href={this.state.refUrl}>{this.state.refUrl}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section m-6">
                    <label class="label">2. Learning Outcomes</label>
                    <div class='table-container'>
                        <body>At the end of this course, you will be able to:</body>
                        {this.renderOutcomeTable()}
                    </div>
                </section>
                <section class="section m-6">
                    <label class="label">7. Final Grade Determination</label>
                    <div class='table-container'>
                        <body>The final grade in this course will be based on the following components:</body>
                        {this.renderFinalGradeTable()}
                    </div>
                    <div class='table-container'>
                        <body>Notes:</body>
                        <body></body>
                        <body>a) Conversion from a score out of 100 to a letter grade will be done using the conversion chart shown below. This grading scale can only be changed during the term if the grades will not be lowered.</body>
                        {this.renderLetterGradeTable()}
                    </div>
                </section>
                <section class="section m-6">
                    <button class="button is-link is-centered" onClick={evt => this.savePDF(evt)}>Save PDF</button>
                </section>
            </div>
        );
    }
}