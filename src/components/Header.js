import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<div>
		<header>Expensify</header>
		<span><NavLink activeClassName="is-active" exact to="/">Dashboard</NavLink></span><span>&nbsp;</span>
		<span><NavLink activeClassName="is-active" to="/create">Create</NavLink></span><span>&nbsp;</span>
		<span><NavLink activeClassName="is-active" to="/edit">Edit</NavLink></span><span>&nbsp;</span>
		<span><NavLink activeClassName="is-active" to="/help">Help</NavLink></span>
	</div>
);

export default Header;
