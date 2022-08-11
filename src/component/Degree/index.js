import './style.scss';
import CLG from '../../assets/images/clg.jpeg';
import UNI from '../../assets/images/uni.jpeg';
import React from 'react';

const Degree = () => {
    return(
    <div className='top'>
        <h1>EDUCATION & CERTIFICATES</h1>
        <div className='degree'>
            <div className="child1">
            <img  src={UNI} alt="clg-1"/>
            </div>
            
            <div className='child2'>
                <span>University of Ottawa,</span>
                <span> Ottawa, Ontario, Canada, Master's - Electrical and Computer Science</span><br/>
                <span>Sep 2019 - Feb 2020</span><br/><br/>
                <span>Exam ProctorExam Proctor</span><br/>
                <i>Courses: Introduction to Business Management & Marketing Research, Business Decision Models.</i>
                <li>Appointed as Course assistant and Proctor for two subjects at Telfer School of Management.</li>
                <li>Responsible in making student teams, marking assignments, exams, group projects and monitoring the experiments in lab, proctoring, clarifying student doubts. </li>
                <li>Conducted final exams to the students and helped the professors to monitor students and ensuring academic integrity. </li>
                <li>Personal interaction with non-performing students and worked on providing assistance for their better performance in the subjects.</li><br/>

                <i>Courses: Introduction to Business Management & Marketing Research, Business Decision Models</i>
                    <li>Appointed as Course assistant and Proctor for two subjects at Telfer School of Management.</li>
                    <li>Responsible in making student teams, marking assignments, exams, group projects and monitoring the experiments in lab, proctoring, clarifying student doubts.</li>
                    <li>Conducted final exams to the students and helped the professors to monitor students and ensuring academic integrity.</li>
                    <li>Personal interaction with non-performing students and worked on providing assistance for their better performance in the subjects.</li><br/>

                <span>Student Volunteer, </span>
                <span>Aug 2019 - Sep 2019</span>
                 <li>Member in uOttawa volunteering services – Conducted campus tours and provided housing to 30 students.</li>
                 <li>Member in uOttawa Makerspace - Worked on 3D printing Machines and their performance in labs.</li>
            </div>
        </div>
        <br/><br/>
        <div className='degree'>
            <div className='child1'>
            <img src={CLG} alt="clg-1"/>
            </div>
           
            <div className='child2'>
                <span>Jawaharlal Nehru Technological University, Kakinada</span><br/>
                <span>Bachelor's degree, Electrical, Electronics and Communications Engineering</span><br/>
                <span>2013 - 2017, Grade: FIRST CLASS</span><br/><br/>
                    <li>Lead a team of 4, submitted Final year project on "Under Water Image Processing" to department HOD and gained highest credits.</li>
                    <li>Activities and societies: Member and Representative for "Texas Instruments Semiconductor Devices".</li>
                    <li>Volunteer for Government Funding Programs.</li>
                    <li>Member/Volunteer and Representative for "LIONS CLUB" blood donation camps.</li>
                    <li>Represented as department lead and contributed in conducting collge events and bussiness collaborations.</li>
                    <li>As a captain, motivated the team to win sport throphies in Cricket, Volleybal and Batmanton.</li>
            </div>
        </div>
    </div>
    )
}
export default Degree;