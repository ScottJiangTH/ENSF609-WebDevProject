import 'bulma/css/bulma.css';
import React from 'react'

export default class SelectedForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        courseNumber: 0,
        courseName: 0,
        courseDescription: 0,
        academicCredit: 0,
        lectureHours: 0,
        labHours: 0,
        refUrl: 0,
        outcomes: [
            {
                oid,
                description,
                graduateAttributes:[
                    {
                        gid,
                        description,
                        instructionLevel,
                    }
                ]
            }
        ],
        contentCategory: {
            math1,
            math2,
            mathAU,
            ns1,
            ns2,
            nsAU,
            cs1,
            cs2,
            csAU,
            esAU,
            edAU,
        },
        sections: {
            lectureSections,
            lectureHours,
            lectureNSPS,
            tutorialSections,
            tutorialHours,
            tutorialNSPS,
            labSections,
            labHours,
            labNSPS,
        },
        labExperience:{
            labType,
            numberOfLabs,
            safetyTaught,
            safetyExamined,
            courseNumber,
        },
        finalGrade:{
            assignmentsOutcomes,
            assignmentsWeight,
            projectOutcomes,
            midtermOutcomes,
            midtermWeight,
            finalOutcomes,
            finalWeight,
        },
        letterGrade:{
            apLow,
            apHigh,
            aLow,
            aHigh,
            amLow,
            amHigh,
            bpLow,
            bpHigh,
            bLow,
            bHigh,
            bmLow,
            bmHigh,
            cpLow,
            cpHigh,
            cLow,
            cHigh,
            cmLow,
            cmHigh,
            dpLow,
            dpHigh,
            dLow,
            dHigh,
            fLow,
            fHigh,
        }
    }

    render() {
        return (
            <html>

            </html>
        )
    }
}