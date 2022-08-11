import React from 'react';
import './style.scss';


const Skills = () => {
    console.log('skills');
    return (
        <div className="skills">
            <h1>SKILLS AND TECHNOLOGIES</h1>
            <br/>
            <div className="content">
                <div>
                    <strong>Front End Technologies</strong>
                    <li>HTML</li>
                    <li>CSS, SCSS, SASS</li>
                     <li>AJAX, JSON, JQUERY</li>
                     <li>Bootstrap, MaterialUI, StoryBooks</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Back End Technologies</strong>
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>C#, ASP.NET</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Frameworks & Libraries</strong>
                    <li>Angular</li>
                    <li>React.js</li>
                    <li>Redux</li> 
                    <li>React Native</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Databases</strong>
                    <li>MongoDB</li>
                    <li>SSMS</li>
                    <li>PostgreSQL</li>  
                    <li>DynamoDB</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>UI/UX & IDE</strong>
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>  
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Platforms</strong>
                    <li>Windows</li>
                    <li>Mac</li>
                    <li>Linux</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Cloud Technologies</strong>
                    <li>AZURE, AWS</li>
                    <li>Docker</li>
                    <li>Azure Pipelines, Azure Repos</li>
                    <li>Git, GitHub</li>   
                    <li>Jenkins</li>
                </div>
                <br/>
                <br/>
                <div>
                    <strong>Testing</strong>
                    <li>Unit Testing</li>
                    <li>Karma</li>
                    <li>Jasmine</li>
                    <li>Cypress</li>   
                </div>
                <br/>
                <br/>
            </div>
            
        </div>
    );
};

export default Skills;
