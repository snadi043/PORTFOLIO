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
                <h3>University of Ottawa</h3>
                <h4> Ottawa, Ontario, Canada, Master's - Electrical and Computer Science</h4>
                <h5>Sep 2019 - Feb 2020</h5>
                <p><u>Exam Proctor</u></p>
                <i>Courses: Introduction to Business Management & Marketing Research, Business Decision Models.</i>
                <p>Appointed as Course assistant and Proctor for two subjects at Telfer School of Management.</p>
                <p>Responsible in making student teams, marking assignments, exams, group projects and monitoring the experiments in lab, proctoring, clarifying student doubts. </p>
                <p>Conducted final exams to the students and helped the professors to monitor students and ensuring academic integrity. </p>
                <p>Personal interaction with non-performing students and worked on providing assistance for their better performance in the subjects.</p>

                <p><u>Student Volunteer </u></p>
                <p>Aug 2019 - Sep 2019</p>
                 <p>Member in uOttawa volunteering services – Conducted campus tours and provided housing to 30 students.</p>
                 <p>Member in uOttawa Makerspace - Worked on 3D printing Machines and their performance in labs.</p>
            </div>
        </div>
        <br/><br/> <br/><br/>
        
        <div className='degree'>
            <div className='child1'>
            <img src={CLG} alt="clg-1"/>
            </div>
           
            <div className='child2'>
                <h3>Jawaharlal Nehru Technological University, Kakinada</h3>
                <h4>Bachelor's degree, Electrical, Electronics and Communications Engineering</h4>
                <h5>2013 - 2017,   Grade: FIRST CLASS</h5>
                    <p>Lead a team of 4, submitted Final year project on "Under Water Image Processing" to department HOD and gained highest credits.</p>
                    <p>Activities and societies: Member and Representative for "Texas Instruments Semiconductor Devices".</p>
                    <p>Volunteer for Government Funding Programs.</p>
                    <p>Member/Volunteer and Representative for "LIONS CLUB" blood donation camps.</p>
                    <p>Represented as department lead and contributed in conducting collge events and bussiness collaborations.</p>
                    <p>As a captain, motivated the team to win sport throphies in Cricket, Volleybal and Batmanton.</p>
            </div>
        </div>
    </div>
    )
}
export default Degree;