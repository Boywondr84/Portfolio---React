import React from 'react';
import ResumeFile from '../../assets/Resume.txt';

function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={ResumeFile} download="Resume">Download Resume</a>
            

                <h2>Proficiencies:</h2>
                <div id="basics">
                    <h3>
                        Basics:
                    </h3>
                        <ul>HTML</ul>
                        <ul>CSS</ul>
                        <ul>JavaScript</ul>
                </div>
                <div id="databases">
                    <h3>
                        Databases:
                    </h3>
                        <ul>MySQL</ul>
                        <ul>NoSQL</ul>
                        <ul>GraphQL</ul>
                </div>
                <div id="mern">
                    <h3>
                        MERN Stack:
                    </h3>
                        <ul>MongoDb</ul>
                        <ul>Express.js</ul>
                        <ul>React.js</ul>
                        <ul>Node.js</ul>
                </div>
        </div>
    );
}

export default Resume;