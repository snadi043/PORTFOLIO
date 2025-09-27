import Wrapper from "../../Utilities/Wrapper";
import Timeline from "../../Utilities/Timeline";
import Text from "../../Utilities/Text";
import PageIntroSection from "../../Utilities/PageIntroSection";

import responsibilities from "./data";

import './style.scss';

const Resume = () => {
    return (
        <Wrapper className="resume-page">
              <PageIntroSection introHeading={"Resume"}>
                <Text className="fs-6">
                  Young, Enthusiastic and everyday hustler with Master's Degree in Computer Science and passion for building business applications.
                  Harnessing the power of technology to create innovative solutions and drive success by updating and optimizing existing systems.
                  Coffee Lover.
                </Text>
              </PageIntroSection>
            <div className="container-fluid" style={{display: 'grid', gridTemplateColumns: 'auto auto', rowGap: 'inherit', columnGap: '30px',}}>
                <Timeline
                    count={2}
                    title={["Bachelor's in Electronics & Communications Engineering", "Master's in Electrical & Computer Science Engineering"]}
                    timelineHeading={"EDUCATION"} 
                    instituteName={["JNTU KAKINADA", "University of Ottawa"]} 
                    duration={["2013 - 2017", "2018 - 2020"]} 
                    src={["https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4", "https://media.licdn.com/dms/image/v2/D4E0BAQExhZUq9XVYwA/company-logo_200_200/company-logo_200_200/0/1695239223935/uottawa_logo?e=1760572800&v=beta&t=CXNIto-xQYZ0zl_PlbGQc6R2U1XdUemQa_q1qH_4PC4"]}
                    responsibilities={responsibilities.education.map((edu, idx) => 
                        edu.map((idvEdu) => <li key={idvEdu[idx].length}>{idvEdu}</li>)
                    )}
                />
                <Timeline
                    count={3}
                    title={["Web Developer", "Frontend Developer", "Software Developer"]}
                    timelineHeading={"PROFESSIONAL EXPERIENCE"} 
                    instituteName={["Arete IT Services", "Aethon Aerial Solutions", "Zendelity"]} 
                    duration={["2017 - 2018", "2021 - 2022", "2022 - 2024"]} 
                    src={["https://media.licdn.com/dms/image/v2/C510BAQEZrQ62prNJqg/company-logo_200_200/company-logo_200_200/0/1630623068873?e=1760572800&v=beta&t=_YmBttm82XVLxmGeDkHgKBdR9k2o5h7tozfkx9Qb9go","https://media.licdn.com/dms/image/v2/C4E0BAQFlyW1AYfv-3g/company-logo_200_200/company-logo_200_200/0/1670268432631/aethon_aerial_logo?e=1760572800&v=beta&t=T1NOOjcR1AubQv_5N9nawpDrWu8zm3HbkPhVmaG0zeQ","https://media.licdn.com/dms/image/v2/C4E0BAQEssaoG0E9otw/company-logo_200_200/company-logo_200_200/0/1636141766794/zendelity_logo?e=1760572800&v=beta&t=D5SEzsDgcqQiBkp3lIn8Y2J69sXA-a1mdC3cmN0rZq0"]}
                    responsibilities={responsibilities.work.map((work, idx) =>
                        work.map((idvWork) => <li key={idvWork[idx].length}>{idvWork}</li>)
                    )}
                />
                <Timeline
                    count={2}
                    title={["Frontend Developer", "UI/UX Developer"]}
                    timelineHeading={"VOLUNTARY EXPERIENCE"} 
                    instituteName={["BuildN", "Empowered Futures"]} 
                    duration={["2022 - 2023", "2024"]} 
                    src={["https://media.licdn.com/dms/image/v2/C560BAQFmDaaZYXv2Zw/company-logo_200_200/company-logo_200_200/0/1660016100892?e=1760572800&v=beta&t=j6_Tt0tjqvE9ruPnHqb6OHdVAqa_poBEHo5GWAnR83M", "https://media.licdn.com/dms/image/v2/D560BAQFS3FCPwcPmbg/company-logo_200_200/B56ZYHd67UGsAI-/0/1743882007452/empwrdfutures_logo?e=1760572800&v=beta&t=QYx2jt6dGMMfpXX0mE7-GbEF21pl5lECPfGI6roLe1c"]}
                    responsibilities={responsibilities.volunteer.map((vol, idx) => 
                        vol.map((idvVol) => <li key={idvVol[idx].length}>{idvVol}</li>)
                    )}
                />
                <Timeline
                    count={1}
                    title={["Application Developer"]}
                    timelineHeading={"INTERNSHIP"} 
                    instituteName={["Prepr"]} 
                    duration={["2025"]} 
                    src={["https://media.licdn.com/dms/image/v2/C4D0BAQG8QFedRVKWBg/company-logo_200_200/company-logo_200_200/0/1631367621433/prepr_foundation_logo?e=1760572800&v=beta&t=-kcegTfN-dJSt18ySofTINnUe1w44FnnDRNBI3k7soI"]}
                    responsibilities={responsibilities.internship.map((intern, idx) => 
                        intern.map((idvIntern) => <li key={idvIntern[idx].length}>{idvIntern}</li>)
                    )}
                />
            </div>
        </Wrapper>
        );
    }
export default Resume;


