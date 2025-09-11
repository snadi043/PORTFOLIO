import React from 'react';
import Image from '../Image';
import './style.scss';

const Timeline = (props) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px'}}>
            <section className="py-2">
            <h2>{props.timelineHeading}</h2>
                    <ul className="timeline">
                        <li>
                            {[...Array(props.count)].map((index) => 
                                <div className="timeline-item" style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px'}}>
                                    <Image 
                                        src={props.imageSrc} 
                                        alt={"university_logo"} 
                                        height={100} 
                                        width={100} 
                                        className=""/>
                                        {/* <div> */}
                                    <div key={index}>
                                            <h5 className="fw-bold">{props.title}</h5>
                                            <p className="text-muted mb-2 fw-bold">{props.duration}</p>
                                            <p className="text-muted mb-2 fw-bold">{props.instituteName}</p>
                                            {props.responsibilities}
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
            </section>
        </div>        
    );
}

export default Timeline;

