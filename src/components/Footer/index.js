import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from 'react-icons/ai';

function Footer () {
    return (
        <div className="footer">
        <p>Copyright 2022 - RDK</p>
        <a href="https://github.com/Boywondr84">
        <AiFillGithub size="50px"/>
        </a>
        <a href="https://www.linkedin.com/in/ryan-kahlbaugh-837878255/">
        <AiFillLinkedin size="50px" />
        </a>
        <a href="https://www.facebook.com/">
        <AiOutlineFacebook size="50px"/>
        </a>
        </div>
    );
}

export default Footer;