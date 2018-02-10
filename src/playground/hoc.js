import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.authed ? <WrappedComponent {...props} /> : <p>Not authed</p>}
		</div>
	)
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="test" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo authed={true} info="test" />, document.getElementById('app'));
