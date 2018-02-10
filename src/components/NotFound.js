import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
	<div>
		404. This is from the not found component. <Link to="/">go home</Link>
	</div>
);

export default NotFound;
