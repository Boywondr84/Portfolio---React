import React, { useState } from 'react';
import NavHeaders from './Navigation';
import Home from './components/Home';
import About from './components/About';
import ProjectList from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function Project() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <ProjectList />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavHeaders currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default Project;