import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './Introduction.css';
import setas from '../../assets/setasIntroduction.png';

const Introduction = () => {
	const [text] = useTypewriter({
		words: ['Frontend', 'Backend', 'Fullstack Developer'],
		loop: 1,
		deleteSpeed: 30,
		delaySpeed: 1000,
	});

	return (
		<>
			<div className="introduction">
				<h2>HEY! I AM</h2>
				<h1>João Vitor</h1>
				<h3>
					I'm a <span className="introduction__text-type">{text}</span>
					<span className="introduction__text-type-cursor">
						<Cursor />
					</span>
				</h3>
			</div>
		</>
	);
};

export default Introduction;
