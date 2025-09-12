import React from 'react';
import Image from '../Image';
import './style.scss';

const Timeline = (props) => {
    const {
        count,
        timelineHeading,
        src = [],
        title = [],
        duration = [],
        instituteName = [],
        responsibilities = [],
    } = props;

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px', marginTop: '30px'}}>
            <section>
                <h2 className='mb-5'>{timelineHeading}</h2>
                <ul className="timeline">
                    {[...Array(count)].map((_, index) => (
                        <li key={index}>
                            <div className="timeline-item mb-5" style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px'}}>
                                <Image 
                                    src={src[index]}
                                    alt={"timeline_logo"}
                                    height={100}
                                    width={100}
                                />
                                <div>
                                    <h5 className="fw-bold">{title[index]}</h5>
                                    <p className="text-muted mb-2 fw-bold">{duration[index]}</p>
                                    <p className="text-muted mb-2 fw-bold">{instituteName[index]}</p>
                                    <ul style={{listStyle: 'disc', textAlign: 'justify'}}>{responsibilities[index]}</ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Timeline;

