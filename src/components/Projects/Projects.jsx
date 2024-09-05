import React from 'react';

import './Projects.css';
import Project from '../MiniComponents/Project';

import mypeace from '../../assets/github mypeace api.png';
import todolist from '../../assets/todolist.png';
import authenticationapi from '../../assets/authenticationapi.png';

const Projects = () => {
	

	return (
		<div className="projects" id='projects'>
			<h1>Projects</h1>
			<div className="projects__previews" id='projects__previews'>
				<Project
					preview={mypeace}
					name="MyPeace Api Restfull"
					technologies="Uma api restfull, onde um psicologo faz seu registro, loga, registra seus pacientes, e seu pacientes podem registrar um diário de emoções, na qual o psicólogo tem acesso para melhor performance nos atendimentos. Ao registrar um paciente, o paciente registrado recebe um email com sua senha de acesso. Tecnologias: Node.js, Typescript, Mongodb. "
					url='https://github.com/devjoaovitorrocha/my-peace-api'
				/>
				<Project
					preview={authenticationapi}
					name="Api de Autenticação JWT e Bcrypty"
					technologies="Api de autenticação e autorização utilizando Typescript, Node e MongoDB"
					url='https://github.com/devjoaovitorrocha/authentication-api'
				/>
				<Project
					preview={todolist}
					name="To do List React"
					technologies="Um webapp capaz de adicionar, editar e remover tarefas feito em React."
					url='https://github.com/devjoaovitorrocha/my-peace-api'
				/>
			</div>
		</div>
	);
};

export default Projects;
