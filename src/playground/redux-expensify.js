import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
	// expense: state.filter(expense => expense.id !== id)
});

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// Expenses reducer
const expensesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense, amount: action.updates.amount
					}
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// Filters reducer
const filtersReducer = (state = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {...state, text: action.text};
		case 'SORT_BY_AMOUNT':
			return {...state, sortBy: 'amount'};
		case 'SORT_BY_DATE':
			return {...state, sortBy: 'date'};
		case 'SET_START_DATE':
			return {...state, startDate: action.startDate};
		case 'SET_END_DATE':
			return {...state, endDate: action.endDate};
		default:
			return state;
	}
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = typeof text !== 'string' || expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1;

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	});
};

// create store
const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}));
store.subscribe(() => {
	const state = store.getState();		// state with all expenses and all filters
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log("visible expenses:", visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: '1st desc', amount: 1700, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: '2nd desc', amount: 18, createdAt: 1500 }));
console.log(expense1);
// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter('desc'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(-1025));
// store.dispatch(setEndDate(5521));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
	expenses: [{
		id         : 'random_id',
		description: 'rent',
		note       : 'longer rent expense description',
		amount     : 12345,
		createdAt  : 0,
	}],
	filters: {
		text     : 'rent',
		sortBy   : 'amount',		// value to sort by when on dashboard
		startDate: undefined,
		endDate  : undefined,
	},
};

const user = {
	name: "John Doe",
	age: 24
};
console.log("object spread:", {
	age: 18,
	...user,
	location: "Quito"
});
