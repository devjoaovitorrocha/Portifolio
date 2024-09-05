import React, { useState } from 'react';
import linkedinLogo from '../../../assets/linkedin.png';
import githubLogo from '../../../assets/github.png';

import { HashLink } from 'react-router-hash-link';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Navbar.css';

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false);

	const Menu = (props) => {
		return (
			<div className={props.class} style={{ display: props.display}}>
				<a href="/"> Home </a>
				<HashLink smooth to='/#about' >About</HashLink>
				<HashLink smooth to='/#projects' >Projects</HashLink>
				<HashLink smooth to='/#footer' >Contact</HashLink>
				<HashLink smooth to='/#technology' >Technologies</HashLink>
                <div>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-647082250/" target='_blanck'>
                        <img
                            src={linkedinLogo}
                            alt=""
                        />
                    </a>
                    <a href="https://github.com/devjoaovitorrocha?tab=repositories" target='_blanck'>
                        <img
                            src={githubLogo}
                            alt=""
                            style={{ width: 33 + 'px' }}
                        />
                    </a>
                </div>
			</div>
		);
	};

    const UnloadScrollBars = (props) => {
        document.documentElement.style.overflow = props.overflow;
        document.body.scroll = props.scroll;
    }
    

	return (
		<>
			<div className="navbar">
				<Menu class="navbar__menu" />
				<div className="navbar__menu-mobile">
					{toggleNavbar ? (
                        <>
                            <RiCloseLine
                                color="#242424"
                                size={27}
                                onClick={() => setToggleNavbar(false)}
                            />
                            <UnloadScrollBars overflow="hidden" scroll="no" />
                            <Menu class="navbar__menu-mobile__menu" display="flex" />
                        </>
					) : (
                        <>
                            <RiMenu3Line
                                color="#242424"
                                size={27}
                                onClick={() => setToggleNavbar(true)}
                            />
                            <UnloadScrollBars overflow="visible" scroll="yes" />
                        </>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
