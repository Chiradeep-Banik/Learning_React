import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
	return (
		<nav>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/form">Form</Link></li>
			<li><Link to="/hooks">Hooks</Link></li>
			<li><Link to="/todo">TODO</Link></li>
			<li><Link to="/context">Context</Link></li>
			<li><Link to="/list/:arr">List</Link></li>
		</nav>
	);
}

export default Nav;