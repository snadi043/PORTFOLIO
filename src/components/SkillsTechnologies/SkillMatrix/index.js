import React from 'react';
import Text from '../../../Utilities/Text';
import Progressbar from '../../../Utilities/Progressbar';

const SkillMatrix = () => {
    return (
    <div className='container-fluid md-2 p-2' 
        style={{
        rowGap: '10px', 
        columnGap: '50px', 
        marginTop: '20px', 
        fontWeight: 'bold'
        }}>
        <div className='container-fluid md-2 p-2' style={{display: 'grid', gridTemplateColumns: 'auto auto auto auto', columnGap: 'inherit', rowGap: 'inherit', alignItems: 'baseline'}}>
            <Text>Frontend</Text> 
                <Progressbar 
                    skillPercentage1="100%" 
                    skillPercentage2="100%" 
                    skillPercentage3="85%"
                    skillLabel1="HTML"
                    skillLabel2="CSS"
                    skillLabel3="JS"
                    progressWidth1="100%"
                    progressWidth2="100%"
                    progressWidth3="85%"
                />
            <Text>Backend</Text>
                <Progressbar 
                    skillPercentage1="45%" 
                    skillPercentage2="95%" 
                    skillPercentage3="50%"
                    skillLabel1="C#"
                    skillLabel2="NODE"
                    skillLabel3="PHP"
                    progressWidth1="45%"
                    progressWidth2="95%"
                    progressWidth3="50%"
                />
            <Text>Databases</Text>
                <Progressbar 
                    skillPercentage1="75%" 
                    skillPercentage2="75%" 
                    skillPercentage3="80%"
                    skillLabel1="SQL"
                    skillLabel2="SSMS"
                    skillLabel3="MONGODB"
                    progressWidth1="75%"
                    progressWidth2="75%"
                    progressWidth3="80%"
                />
            <Text>Frameworks</Text>
                <Progressbar 
                    skillPercentage1="65%" 
                    skillPercentage2="85%" 
                    skillPercentage3="70%"
                    skillLabel1="REACT"
                    skillLabel2="ANGULAR"
                    skillLabel3="FLUTTER"
                    progressWidth1="65%"
                    progressWidth2="85%"
                    progressWidth3="70%"
                />
            <Text>Environments</Text>
                <Progressbar 
                    skillPercentage1="65%" 
                    skillPercentage2="65%" 
                    skillPercentage3="70%"
                    skillLabel1="LINUX"
                    skillLabel2="MACOS"
                    skillLabel3="WINDOWS"
                    progressWidth1="65%"
                    progressWidth2="65%"
                    progressWidth3="70%"
                />
            <Text>Cloud</Text>
                <Progressbar 
                    skillPercentage1="65%" 
                    skillPercentage2="85%" 
                    skillPercentage3="25%"
                    skillLabel1="AZURE"
                    skillLabel2="AWS"
                    skillLabel3="GCP"
                    progressWidth1="65%"
                    progressWidth2="85%"
                    progressWidth3="25%"
                />
        </div>
    </div>

    );
}
export default SkillMatrix;