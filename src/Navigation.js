import React from 'react';

function NavHeaders({ currentPage, handlePageChange }) {
    return (
        
        <header className="nav nav-tabs">
            <button>Ryan Kahlbaugh</button>

            <li className="nav-item">
                <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About</a>
            </li>

            <li className="nav-item">
                <a href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >Home</a>
            </li>


            <li className="nav-item">
                <a href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >Projects</a>
            </li>

            <li className="nav-item">
                <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >Resume</a>
            </li>

            <li className="nav-item">
                <a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact</a>
            </li>
        </header>
    );
}

export default NavHeaders;