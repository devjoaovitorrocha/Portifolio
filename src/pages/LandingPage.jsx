import React from 'react';
import Navbar from '../components/Header/Navbar/Navbar';
import Introduction from '../components/Introduction/Introduction';
import About from '../components/About/About';
import Technology from '../components/Technology/Technology';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

import './LandingPage.css';


const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Introduction />
			<About />
			<Technology />
			<Projects />
			<Footer />
		</>
	);
};

export default LandingPage;
