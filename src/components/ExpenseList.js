import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (

	<div>
		<p>ExpenseList</p>
		{props.expenses.map((exp, i) => <ExpenseListItem key={i} {...exp} />)}
	</div>
);

const mapStateToProps = (state) => {
	return {
		name: 'Mikki. Just to put an arbitrary value to the store.',
		expenses: getVisibleExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
