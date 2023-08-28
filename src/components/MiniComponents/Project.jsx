import React from 'react';

import './Project.css';

const Project = (props) => {
	return (
		<div className="project">
			<h1>{props.name}</h1>
			<a
				href="https://www.youtube.com/watch?v=fBNW09FVtEA"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={props.preview}
					alt=""
				/>
			</a>
			<h2>{props.technologies}</h2>
		</div>
	);
};

export default Project;
