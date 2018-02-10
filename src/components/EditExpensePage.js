import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { removeExpense, editExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
	console.log("EditExpensePage props:", props);

	onSubmit = (expense) => {
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};
	onRemove = () => {
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	return (
		<div>
			This is from the edit expense component. {props.match.params.id}
			<ExpenseForm
				expense={props.expense}
				onSubmit={this.onSubmit}
			/>
			<button onClick={this.onRemove}>X</button>
		</div>
	);
};

const mapStateToProps = (state, props) => {			// props come from BrowserRouter
	return {
		expense: state.expenses.find(exp => exp.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
