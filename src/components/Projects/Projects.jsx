import React from 'react';

import './Projects.css';
import Project from '../MiniComponents/Project';

import toDolist from '../../assets/preview.png';
import Button from '../MiniComponents/Button';

const Projects = () => {
	return (
		<div className="projects">
			<h1>Projects</h1>
			<div className="projects__previews">
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
            <Button color="#0A1F33" content="View All Projects" />
		</div>
	);
};

export default Projects;
