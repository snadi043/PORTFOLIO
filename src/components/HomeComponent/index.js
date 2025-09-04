import React from 'react';
import Image from '../../Utilities/Image';
import Text from '../../Utilities/Text';
import TypeWritterComponent from '../../Utilities/TypeWritter';
// import {Link} from 'react-router-dom';
// import TypeWriterEffect from 'react-typewriter-effect';
// import './style.scss';

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

const HomeComponent = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <Image
                className="container object-fit-cover"
                src="https://avatars.githubusercontent.com/u/60456049?v=4" 
                alt="LandingPagePicture"
                style={{display: 'flex'}}
                />
            </div>
            <Text style={{
                color: '#242020ff', 
                fontSize: '48px', 
                fontFamily: 'Arial, sans-serif',
                fontWeight: '600'}}>
            SAI HARNADH
            </Text>
            <TypeWritterComponent />
        </div>
        // <div className="Home">
        //     <div className='text-zone'>
        //         <div className='title'>
        //         <h1>
        //         <span className='b'>HI, I'M</span>
        //         <span className="a" >S</span>
        //         <span className="a" >A</span>
        //         <span className="a" >I</span>
        //         <span>  </span>
        //         <span className="a">H</span>
        //         <span className="a" >A</span>
        //         <span className="a" >R</span>
        //         <span className="a" >N</span>
        //         <span className="a">A</span>
        //         <span className="a" >D</span>
        //         <span className="a">H</span>
        //        </h1>
        //        <h2>| Full Stack Web Developer | Mobile Developer |</h2><br/><br/>
        //         </div>
               
        //         <TypeWriterEffect 
        //         textStyle={{fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', 
        //         color: "white", fontSize: "24px"}}
        //         startDelay={600}
        //         cursorColor="white"
        //         multiText={["'Success is not final; Failure is not fatal; It's always about your determination that counts; Keep struggling... & Always dare to be different!!"]}
        //         typeSpeed={100}
        //         loop={true}
        //         nextTextDelay={600}
        //         />
        //         <Link to="/contact" className='flat-button'>
        //             <button>Contact Me</button>
        //         </Link>

                
        //     </div> 
           
        // </div>
    );
};

export default HomeComponent;
