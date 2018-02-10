/*
let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const subtractOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	if (count !== 0) {
		count = 0;
		renderCounterApp();
	}
};

const renderCounterApp = () => {
	const template3 = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={reset}>reset</button>
			<button onClick={subtractOne}>-1</button>
		</div>
	);
	// console.log(template3);

	ReactDOM.render(template3, appRoot);
};
renderCounterApp();

ReactDOM.render(<div>{template}{templateTwo}</div>, appRoot);
*/

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne   = this.handleAddOne.bind(this);
		this.handleReset    = this.handleReset.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.state          = { count: props.count };
	}

	componentDidMount() {
		console.log("component did mount");
		try {
			const count = parseInt(localStorage.getItem('count'));
			console.log("count:", count);
			if (count) {
				this.setState( () => ({count: count}) );
			}
		} catch(ex) {
			// do nothing
			console.log("error occured");
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("component did update");
		console.log("prevState.count:", prevState.count);
		console.log("this.state.count:", this.state.count);
		if (prevState.count !== this.state.count) {
			localStorage.setItem('count', this.state.count);
		}
	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			}
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0,
			}
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
				<button onClick={this.handleAddOne}>+1</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	count: 0,
};

ReactDOM.render(<Counter />, document.getElementById('app'));
