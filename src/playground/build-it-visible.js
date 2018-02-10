/* const appRoot = document.getElementById('app');
let visible = true;
let text = "text initially visible";

const onButtonClick = () => {
	visible = !visible;
	renderOnScreen();
};

const renderOnScreen = () => {
	ReactDOM.render(
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={onButtonClick}>{visible ? "hide" : "show"}</button>
			<p>{visible && "some text made visible"}</p>
		</div>
		, appRoot
	);
};

renderOnScreen(); */

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {visible: true};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState((prevState) => {
			// console.log(prevState);
			return {
				visible: !prevState.visible
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.onButtonClick}>{this.state.visible ? "hide" : "show"}</button>
				<p>{this.state.visible && "some text made visible"}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
