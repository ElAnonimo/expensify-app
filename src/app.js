import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { addExpense, startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();
store.subscribe(() => {
	console.log("store state:", store.getState());
});

store.dispatch(addExpense({ description: "first", amount: 80 }));
store.dispatch(addExpense({ description: "second", amount: 55, createdAt: 50 }));
store.dispatch(addExpense({ description: "third", amount: 100, createdAt: 100 }));
// store.dispatch(setTextFilter("second"));
console.log("filtered:", getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
});
