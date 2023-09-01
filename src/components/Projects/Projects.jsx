import React from 'react';

import './Projects.css';
import Project from '../MiniComponents/Project';

import toDolist from '../../assets/preview.png';

const Projects = () => {
	

	return (
		<div className="projects" id='projects'>
			<h1>Projects</h1>
			<div className="projects__previews" id='projects__previews'>
				<Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
				<Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
                <Project
					preview={toDolist}
					name="To do List"
					technologies="React/Node/MySql"
					description="utilizado pra tal tal, focado para tal tal, tive a intenção de tal tal"
				/>
			</div>
		</div>
	);
};

export default Projects;
