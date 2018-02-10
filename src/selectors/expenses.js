import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		// const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
		// const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
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

export default getVisibleExpenses;
