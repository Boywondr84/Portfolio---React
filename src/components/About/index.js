import React from 'react';
import Image from '../../assets/cover/Cover.png';

function About () {
    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={Image} alt='Author'></img>
            <p>
            Percussionist Ryan Kahlbaugh performs extensively in Milwaukee. He is Principal Percussion of the Milwaukee Ballet Orchestra and performs regularly with the Milwaukee Symphony. 
            He recently began studying full stack web development and is enjoying the new challenges of building websites and writing functions!
            </p>
        </div>
    );
}

export default About;