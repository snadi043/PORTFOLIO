import Timeline from "../../Utilities/Timeline";
import UnderlinedText from '../../Utilities/UnderlinedText';
import Text from "../../Utilities/Text";

const Resume = () => {
    const responsibilities = [
        {
            id: 'bachelors',
            duties: [
                "Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.",
                "Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
                "Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.",
                "Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."  
            ],
        },
        {
            id: 'masters',
            duties: [
                "Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.",
                "Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
                "Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.",
                "Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."  
            ],
        },
        {
            id: 'job1',
            duties: [
                "Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.",
                "Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
                "Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.",
                "Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."  
            ],
        },
        {
            id: 'job2',
            duties: [
                "Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.",
                "Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
                "Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.",
                "Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."  
            ],
        }
    ];
    return (
        <div>
            <div className="container-fluid about-page-intro">
                <UnderlinedText headerText="Resume"/>
                <Text className="fs-4 text">
                    Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                    Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                    Coffee Lover.
                </Text>
            </div>
            <div className="container-fluid" style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px'}}>
                <Timeline
                    count={1}
                    title="Bachelor's in Electrical & Computer Science Engineering"
                    timelineHeading="SUMMARY" 
                    instituteName="JNTU KAKINADA" 
                    duration="2013 - 2017" 
                    imageSrc={"https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4"}
                    responsibilities={
                        <ul style={{listStyle:'disc', textAlign: 'justify'}}>
                            {responsibilities[0].duties.map((duty, idx) => (
                                <li key={idx}>{duty}</li>
                            ))}
                        </ul>
                    }
                />
                <Timeline
                    count={2}
                    timelineHeading="EDUCATION" 
                    instituteName="JNTU KAKINADA" 
                    duration="2013 - 2017"
                    imageSrc={"https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4"} 
                    responsibilities={
                        <ul style={{listStyle:'disc', textAlign: 'justify'}}>
                            {responsibilities[0].duties.map((duty, idx) => (
                                <li key={idx}>{duty}</li>
                            ))}
                        </ul>
                    }
                />
                <Timeline
                    timelineHeading="PROFESSIONAL EXPERIENCE" 
                    instituteName="JNTU KAKINADA" 
                    duration="2013 - 2017" 
                    imageSrc={"https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4"}
                    responsibilities="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.
                    Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."/>
                <Timeline
                    timelineHeading="VOLUNTARY EXPERIENCE" 
                    instituteName="JNTU KAKINADA" 
                    duration="2013 - 2017" 
                    responsibilities="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit necessitatibus adipisci, ad alias, voluptate pariatur officia repellendus.
                    Repellat inventore fugit perferendis totam dolor voluptas et corrupti distinctio maxime corporis optio."/>
                    
            </div>
        </div>
        );
    }
export default Resume;


