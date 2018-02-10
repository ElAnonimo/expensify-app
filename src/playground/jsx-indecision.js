console.log('A new course from Andrew Mead.');

/* var template = React.createElement(
	'p',
	{id: "hooray"},
	'A new course from Andrew Mead'
);
*/
const appRoot = document.getElementById('app');

const app = {
	title: "Colombia",
	subtitle: "Come visit",
	options: ['One', 'Two']
};

const onFormSubmit = (event) => {
	event.preventDefault();

	const option = event.target.elements.option.value;
	// console.log(option);

	if (option) {
		app.options.push(option);
		console.log(app.options);
		event.target.elements.option.value = "";
	}

	renderForm();
};

const onOptionRemove = () => {
	app.options = [];
	renderForm();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	// console.log(randomNum);
	const selectedOption = app.options[randomNum];
	console.log(selectedOption);
};

const renderForm = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{app.options && app.options.length > 0
				? <div>
					Here are the options:
					<ul>{app.options.map((optn, i) => <li key={i}>{optn}</li>)}</ul>
				</div>
				: "No options"
			}
			<button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button><br />
			<button onClick={onOptionRemove}>remove all options</button>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};
renderForm();

const user = {
	name: "Mikki",
	age: 19,
	location: "Colombia"
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

const templateTwo = (
	<div>
		<h1>name: {user.name ? user.name : "Анонимус"}</h1>
		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
);

// ReactDOM.render(<div>{template}{templateTwo}</div>, appRoot);
