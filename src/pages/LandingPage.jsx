import React from 'react';
import Navbar from '../components/Header/Navbar/Navbar';
import Introduction from '../components/Introduction/Introduction';
import About from '../components/About/About';
import Technology from '../components/Technology/Technology';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

import './LandingPage.css';

import { Link } from 'react-router-dom';

import Button from '../components/MiniComponents/Button';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Introduction />
			<About />
			<Technology />
			<Projects />
			<div className='landing-page'>
				<Link to='/projects'><Button color="#0A1F33" content="View All Projects" /></Link>
			</div>
			<Footer />
		</>
	);
};

export default LandingPage;
