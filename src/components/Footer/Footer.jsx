import React from 'react';

import './Footer.css';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';

import curriculo from '../../assets/curriculo.pdf'

import Button from '../MiniComponents/Button';

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer__message">
				<h1>Drop a line.</h1>
				<form>
					<input
						type="name"
						placeholder="Name"
					/>
					<input
						type="email"
						placeholder="Email"
					/>
					<input
						type="text"
						placeholder="Subject"
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
					></textarea>
					<a href="/">
						<Button
							content="Submit"
							color="#0063D8"
						/>
					</a>
				</form>
			</div>
			<div className="footer__contact">
				<h1>CONTACT ME</h1>
				<p>
					Rua Francisco Duarte Mendonça, 2239 - Santa Helena
					<br />
					City: Belo Horizonte
					<br />
					State: Minas Gerais
					<br />
					Country: Brasil
				</p>
				<p>
					+55 (31) 9 8585-3820 <br /> joaovitorcomercial06@gmail.com
				</p>
				<div className="footer__contact-icons">
					<a
						href={curriculo}
						download="curriculo"
					>
						<Button
							content="DOWNLOAD CV"
							color="#0063D8"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/jo%C3%A3o-vitor-647082250/"
						target="_blanck"
					>
						<img
							src={linkedinLogo}
							alt=""
							style={{ width: 70 + 'px' }}
						/>
					</a>
					<a
						href="https://github.com/JoaoVitorProjetos"
						target="_blanck"
					>
						<img
							src={githubLogo}
							alt=""
							style={{ width: 55 + 'px' }}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
