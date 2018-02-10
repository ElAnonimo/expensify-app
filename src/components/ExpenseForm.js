import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// console.log(new Date());		// Date 2018-02-01T09:40:10.917Z
const date = moment();
console.log(date.format('MMM Do, YYYY'));

class ExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			focused: false,
			error: props.expense ? props.expense.error : ''
		};
	}

	/* state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		focused: false,
		error: ''
	}; */

	onDescriptionChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({ description }));
	};

	onNoteChange = (evt) => {
		const note = evt.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = (evt) => {
		const amount = evt.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ focused }));
	};

	onSubmit = (evt) => {
		evt.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: "Please provide description and amount" }));
		} else {
			this.setState(() => ({ error: "" }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount) * 100,		// to convert to cents
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="enter description" autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/><br/><br/>
					<input type="text" placeholder="enter amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/><br /><br />
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.focused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						firstDayOfWeek={1}
						isOutsideRange={() => false}
					/><br /><br />
					<textarea placeholder="enter a note" value={this.state.note} onChange={this.onNoteChange} /><br /><br />
					{ this.state.error && <p>{this.state.error}</p> }
					<button type="submit">add</button>
				</form>
			</div>
		)
	}
}

export default ExpenseForm;
