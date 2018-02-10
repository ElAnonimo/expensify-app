class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state                  = { options: props.options };
		this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
		this.handleDeleteOption     = this.handleDeleteOption.bind(this);
		this.handleAddOption        = this.handleAddOption.bind(this);
		this.handleAddOptionMead    = this.handleAddOptionMead.bind(this);
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) {
				this.setState( () => ({options: options}) );
			}

			console.log("component did mount. fetched data.");
		} catch(ex) {
			// do nothing. The [options] value gets fetched from the default options prop on component
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			console.log("json:", json);
			localStorage.setItem('options', json);

			console.log("component did update. saved data.");
		}
	}
	componentWillUnmount() {
		console.log("component will unmount");
	}

	handleDeleteAllOptions() {
		this.setState(() => {
			return {
				options: [],
			}
		});
	}

	handleDeleteOption(optionToRemove) {
		console.log("handleDeleteOption: ", optionToRemove);

		this.setState(prevState => ({
			options: prevState.options.filter(option => option !== optionToRemove)
		}));
	}

	handleAddOption(value) {
		this.setState(() => {
			return {
				options: [...this.state.options, value]
			}
		});
	}

	handleAddOptionMead(option) {
		console.log("option: ", option);

		if (!option) {
			return "please enter a non empty option";
		} else if (this.state.options.indexOf(option) > -1) {
			return "this option already exists";
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option]),
			}
		});
	}

	render() {
		const title    = "Indecision App";
		const subtitle = "some app motto";
		// const options = ["Thing one", "Thing two", "Thing three"];

		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action hasOptions={this.state.options.length > 0}/>
				<Options
					options={this.state.options}
					handleDeleteAllOptions={this.handleDeleteAllOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption handleAddOption={this.handleAddOption} handleAddOptionMead={this.handleAddOptionMead} />
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: ["Thing one", "Thing two", "Thing three"],
};

/*class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}*/

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: "The default Header's title",
};

/* class Action extends React.Component {
	render() {
		return (
			<div>
				<button disabled={!this.props.hasOptions}>What should I do?</button>
			</div>
		);
	}
} */

const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions}>What should I do?</button>
		</div>
	);
};

/*
class Options extends React.Component {
	/!* constructor(props) {
		super(props);
		this.removeAllOptions = this.removeAllOptions.bind(this);
	}

	removeAllOptions() {
		// this.props.options = [];
		console.log(this.props.options);
	} *!/

	render() {
		return (
			<div>
				<ul>{this.props.options.map((op, i) => <li key={i}><Option option={op} /></li>)}</ul>
				<button onClick={this.props.handleDeleteAllOptions}>Remove all options</button>
			</div>
		);
	}
} */

/* class Option extends React.Component {
	render() {
		return (
			<div>{this.props.option}</div>
		);
	}
} */

const Options = (props) => {
	return (
		<div>
			{!props.options.length ? <p>Please add an option</p> : ""}
			<ul>{props.options.map((op, i) =>
				<li key={i}><Option option={op} handleDeleteOption={props.handleDeleteOption} /></li>)}
			</ul>
			<button onClick={props.handleDeleteAllOptions}>Remove all options</button>
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			{props.option}
			<button onClick={(evt) => props.handleDeleteOption(props.option)}>delete</button>
		</div>
	);
};

class AddOption extends React.Component {
	/*handleSubmit(event) {
		event.preventDefault();
		console.log(event.target.form);

		this.props.handleAddOption(event.target.elements.add.value.trim());
	}*/

	constructor(props) {
		super(props);
		this.handleAddOptionHere = this.handleAddOptionHere.bind(this);
		this.state               = { error: undefined };
	}

	handleAddOptionHere(evt) {
		evt.preventDefault();
		console.log(evt.target);

		const option = evt.target.elements.add.value.trim();
		const error  = this.props.handleAddOptionMead(option);
		this.setState(() => ({ error: error }));

		if (!error) {
			evt.target.elements.add.value = "";
		}
	}

	render() {
		return (
			<form onSubmit={this.handleAddOptionHere}>
				<h3>Add action</h3>
				<input name="add" type="text" placeholder="add action"/>
				{this.state.error && <p>{this.state.error}</p>}
				<button>add</button>
			</form>
		);
	}
}

/*const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};*/

ReactDOM.render(<IndecisionApp options={['optn1', 'optn2']}/>, document.getElementById('app'));
