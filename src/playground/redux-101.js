import {createStore} from 'redux';

/* const incrementCount = (payload = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
	}
}; */

const incrementCount = ({incrementBy = 1} = {}) => {
	return {
		type: 'INCREMENT',
		incrementBy
	}
};

const decrementCount = ({decrementBy = 4} = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({count = 7} = {}) => ({
	type: 'SET',
	count
});

// Reducers
const countReducer = (state = {count: 0}, action) => {
	console.log("createStore() running");

	switch (action.type) {
		case 'INCREMENT':
			// const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				// count: state.count + incrementBy
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			// const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				// count: state.count - decrementBy
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			};
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

/* store.dispatch({
	type: 'RESET'
});
// unsubscribe();
store.dispatch({
	type: 'DECREMENT',
	decrementBy: 2
});
store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});
store.dispatch({
	type: 'SET',
	count: 7
});
*/

store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 1 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(setCount());
store.dispatch(setCount({ count: 100 }));
