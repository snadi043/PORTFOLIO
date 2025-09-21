import React from 'react';

import responsibilities from '../../components/Resume/data';

const timelineData = {
        count: {
            educationCount: 2,
            workCount: 3,
            volunteerCount: 2,
            internshipCount: 1
        },
        timelineHeading: {
            educationHeading: 'EDUCATION',
            workHeading: 'PROFESSIONAL EXPERIENCE',
            volunteerHeading: 'VOLUNTARY EXPERIENCE',
            internshipHeading: 'INTERNSHIP'
        },
        src: {
            eduSrc1: "https://media.licdn.com/dms/image/v2/C510BAQEUTMmTFgbu6A/company-logo_200_200/company-logo_200_200/0/1630563635923?e=1760572800&v=beta&t=Mbo_DSA3ECTwzY1NSkOlkgNYJD-ZoTDo7cmWArlyHd4", 
            eduSrc2: "https://media.licdn.com/dms/image/v2/D4E0BAQExhZUq9XVYwA/company-logo_200_200/company-logo_200_200/0/1695239223935/uottawa_logo?e=1760572800&v=beta&t=CXNIto-xQYZ0zl_PlbGQc6R2U1XdUemQa_q1qH_4PC4",
            workSrc1: "https://media.licdn.com/dms/image/v2/C510BAQEZrQ62prNJqg/company-logo_200_200/company-logo_200_200/0/1630623068873?e=1760572800&v=beta&t=_YmBttm82XVLxmGeDkHgKBdR9k2o5h7tozfkx9Qb9go",
            workSrc2: "https://media.licdn.com/dms/image/v2/C4E0BAQFlyW1AYfv-3g/company-logo_200_200/company-logo_200_200/0/1670268432631/aethon_aerial_logo?e=1760572800&v=beta&t=T1NOOjcR1AubQv_5N9nawpDrWu8zm3HbkPhVmaG0zeQ",
            workSrc3: "https://media.licdn.com/dms/image/v2/C4E0BAQEssaoG0E9otw/company-logo_200_200/company-logo_200_200/0/1636141766794/zendelity_logo?e=1760572800&v=beta&t=D5SEzsDgcqQiBkp3lIn8Y2J69sXA-a1mdC3cmN0rZq0",
            VolSrc1: "https://media.licdn.com/dms/image/v2/C560BAQFmDaaZYXv2Zw/company-logo_200_200/company-logo_200_200/0/1660016100892?e=1760572800&v=beta&t=j6_Tt0tjqvE9ruPnHqb6OHdVAqa_poBEHo5GWAnR83M", 
            VolSrc2: "https://media.licdn.com/dms/image/v2/D560BAQFS3FCPwcPmbg/company-logo_200_200/B56ZYHd67UGsAI-/0/1743882007452/empwrdfutures_logo?e=1760572800&v=beta&t=QYx2jt6dGMMfpXX0mE7-GbEF21pl5lECPfGI6roLe1c",
            InterSrc1: "https://media.licdn.com/dms/image/v2/C4D0BAQG8QFedRVKWBg/company-logo_200_200/company-logo_200_200/0/1631367621433/prepr_foundation_logo?e=1760572800&v=beta&t=-kcegTfN-dJSt18ySofTINnUe1w44FnnDRNBI3k7soI"
        },
        title: {
            educationTitle1: "Bachelor's in Electronics & Communications Engineering",
            educationTitle2: "Master's in Electrical & Computer Science Engineering",
            workTitle1: "Web Developer",
            workTitle2: "Frontend Developer",
            workTitle3: "Software Developer",
            volunteerTitle1: "Frontend Developer",
            volunteerTitle2: "UI/UX Developer",
            internshipTitle: "Application Developer"
        },
        duration: {
            eduDuration1: "2013 - 2017", 
            eduDuration2: "2018 - 2020",
            workDuration1: "2017 - 2018",  
            workDuration2: "2021 - 2022",
            workDuration3: "2022 - 2024",
            volDuration1: "2022 - 2023", 
            volDuration2: "2024",
            internDuration1: "2025"
            // workDuration1:
            // eduDuration2:
        },
        instituteName: {
            eduInstitute1: "JNTU KAKINADA", 
            eduInstitute2: "University of Ottawa",
            workInstitute1: "Arete IT Services",
            workInstitute2: "Aethon Aerial Solutions",
            workInstitute3:  "Zendelity",
            volInstitute1:  "BuildN",
            volInstitute2: "Empowered Futures",
            internInstitute1: "Prepr",
        },
        responsibilities: responsibilities,
}

export default timelineData;