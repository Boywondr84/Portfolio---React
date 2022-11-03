import React from 'react';
import iReadit from '../../assets/Screenshots/iReadit.png';
import JATE from '../../assets/Screenshots/JATE.png';
import Stars from '../../assets/Screenshots/Stars.png';
import Weather from '../../assets/Screenshots/Weather.png';
import TechBlog from '../../assets/Screenshots/TechBlogSite.jpg';
import Meals from '../../assets/Screenshots/FamilyMeals.png';
import Cookies from '../../assets/Screenshots/QuickCookie.png';

const projects = [
    {
        name: 'Staring At The Stars',
        description: 'When will the ISS be viewable in your area?',
        link: 'https://sub-gh.github.io/group-4/',
        GitHub: 'https://github.com/SuB-GH/group-4'
    },
    {
        name: 'My Weather App',
        description: 'Current and 5 day weather forecast application.',
        link: 'https://boywondr84.github.io/My-Weather-App---take-2/',
        GitHub: 'https://github.com/Boywondr84/My-Weather-App---take-2'
    },
    {
        name: 'Just Another Text Editor (JATE)',
        description: 'A single page, PWA text editor, that is able to be installed and even works offline!',
        link: 'https://calm-crag-75810.herokuapp.com/',
        GitHub: 'https://github.com/Boywondr84/Text-Editor'
    },
    {
        name: 'iReadIt',
        description: 'A community website for book lovers.',
        link: 'https://immense-ravine-74376.herokuapp.com/',
        GitHub: 'https://github.com/Boywondr84/iReadIt'
    },
    {
        name: 'My First Tech Blog Site',
        description: 'A tech news blog site where a visitor can view article posts and comments. User can post articles and comments.',
        link: 'https://my-first-tech-blog-site.herokuapp.com/',
        GitHub: 'https://github.com/Boywondr84/My-First-Tech-Blog-Page'
    },
    {
        name: 'Quick Cookie',
        description: 'Online cookie retailer -- delivered to your door!',
        link: 'https://boywondr84.github.io/mern-subscription/',
        GitHub: 'https://github.com/Boywondr84/mern-subscription'
    },
    {
        name: 'Family Dinner Menu',
        description: 'Collection of meal recipes -- Still in development',
        link: 'N/A',
        GitHub: 'https://github.com/Boywondr84/Family-Dinner-Menu'
    }
];

function ProjectList() {
    // console.log(projects.image);
    return (
        <div className="projects">
            <h1>Projects:</h1>
            <ul>
                <a className="link" href={projects[0].link}>{projects[0].name} Application</a>
                <a href={projects[0].GitHub}>{projects[0].name} Repo</a>
                <img src={Stars} alt=""></img>
                <p>{projects[0].description}</p>
            
            
                <a className="link" href={projects[1].link}>{projects[1].name} Application</a>
                <a href={projects[1].GitHub}>{projects[1].name} Repo</a>
                <img src={Weather} alt=""></img>
                <p>{projects[1].description}</p>
            
            
                <a className="link" href={projects[2].link}>{projects[2].name} Application</a>
                <a href={projects[2].GitHub}>{projects[2].name} Repo</a>
                <img src={JATE} alt=""></img> 
                <p>{projects[2].description}</p>
            
                <a className="link" href={projects[3].link}>{projects[3].name} Application</a>
                <a href={projects[3].GitHub}>{projects[3].name} Repo</a>
                <img src={iReadit} alt=""></img>
                <p>{projects[3].description}</p>

                <a className="link" href={projects[4].link}>{projects[4].name} Application</a>
                <a href={projects[4].GitHub}>{projects[4].name} Repo</a>
                <img src={TechBlog} alt=""></img>
                <p>{projects[4].description}</p>

                <a className="link" href={projects[5].link}>{projects[5].name} Application</a>
                <a href={projects[5].GitHub}>{projects[5].name} Repo</a>
                <img src={Cookies} alt=""></img>
                <p>{projects[5].description}</p>
                
                <a className="link" href={projects[6].link}>{projects[6].name} Application</a>
                <a href={projects[6].GitHub}>{projects[6].name} Repo</a>
                <img src={Meals} alt=""></img>
                <p>{projects[6].description}</p>

            </ul>
        </div>
    );
}

export default ProjectList;