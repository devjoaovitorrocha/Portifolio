import React from 'react';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/Header/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import './ProjectPage.css';

const ProjectPage = () => {
    return(
        <>
            <Navbar />
            <Projects />
            <Footer />
        </>
    )
}

export default ProjectPage;