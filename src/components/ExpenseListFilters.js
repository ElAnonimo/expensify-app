import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends Component {
	state = {
		focused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = (focusedChange) => {
		this.setState(() => ({ focused: focusedChange }));
	};

	render() {
		return (
			<div>
				<input onChange={(evt) => this.props.dispatch(setTextFilter(evt.target.value))} value={this.props.filters.text} type="text" />
				<select
					value={this.props.filters.sortBy}
					onChange={(evt) => this.props.dispatch(evt.target.value === 'date' ? sortByDate() : sortByAmount())}
				>
					<option value='date'>Date</option>
					<option value='amount'>Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId="abc"
					endDateId="def"
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.focused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					firstDayOfWeek={1}
					isOutsideRange={() => false}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
