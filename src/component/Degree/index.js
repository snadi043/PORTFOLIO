import './style.scss';
import CLG from '../../assets/images/clg.jpeg';
import UNI from '../../assets/images/uni.jpeg';
import React from 'react';

const Degree = () => {
    return(
    <React.Fragment>
        <h1>EDUCATION & CERTIFICATES</h1>
        <div className='degree'>
            <div className="child1">
            <img  src={UNI} alt="clg-1"/>
            </div>
            
            <div className='child2'>
                <span>University of Ottawa</span>
                <span>Ottawa, Ontario, Canada, MEng In Electrical and Computer Science</span><br/>
                <span>Sep 2019 - Feb 2020</span><br/>
                <span>Exam ProctorExam Proctor</span><br/>
                <i>Courses: Introduction to Business Management & Marketing Research, Business Decision Models.</i>
                <li>Appointed as Course assistant and Proctor for two subjects at Telfer School of Management.</li>
                <li>Responsible in making student teams, marking assignments, exams, group projects and monitoring the experiments in lab, proctoring, clarifying student doubts. </li>
                <li>Conducted final exams to the students and helped the professors to monitor students and ensuring academic integrity. </li>
                <li>Personal interaction with non-performing students and worked on providing assistance for their better performance in the subjects.</li>

                <i>Courses: Introduction to Business Management & Marketing Research, Business Decision Models</i>
                    <li>Appointed as Course assistant and Proctor for two subjects at Telfer School of Management.</li>
                    <li>Responsible in making student teams, marking assignments, exams, group projects and monitoring the experiments in lab, proctoring, clarifying student doubts.</li>
                    <li>Conducted final exams to the students and helped the professors to monitor students and ensuring academic integrity.</li>
                    <li>Personal interaction with non-performing students and worked on providing assistance for their better performance in the subjects.</li>

                <span>Student Volunteer</span>
                <span>Aug 2019 - Sep 2019</span>
                 <li>Member in uOttawa volunteering services – Conducted campus tours and provided housing to 30 students.</li>
                 <li>Member in uOttawa Makerspace - Worked on 3D printing Machines and their performance in labs.</li>
            </div>
        </div>

        <div className='degree'>
            <div className='child1'>
            <img src={CLG} alt="clg-1"/>
            </div>
           
            <div className='child2'>
                <p>Jawaharlal Nehru Technological University, Kakinada</p>
                <span>Bachelor's degree, Electrical, Electronics and Communications Engineering</span>
                <span>2013 - 2017, Grade: FIRST CLASS</span>
                    <li>Activities and societies: Member and Representative for "Texas Instruments Semiconductor Devices".</li>
                    <li>Volunteer for Government Funding Programs.</li>
                    <li>Member/Volunteer and Representative for "LIONS CLUB" blood donation camps.</li>
            </div>
        </div>
    </React.Fragment>
    )
}
export default Degree;