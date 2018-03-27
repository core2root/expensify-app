import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class ExpenseFilters extends React.Component{

  state = {
    calenderFocused: null,
    startDateId:'123_fg_f3',
    endDateId:'bb_097_bdsd'
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({calenderFocused}))
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }
          } />
        <select
          value={this.props.filters.sortBy == 'date' ? 'date' : 'amount'}
          onChange={(e) => {
            const val = e.target.value;
            this.props.dispatch(val == 'date' ? setSortByDate() : setSortByAmount());
          }
          }>
          <option value='date'>By Date</option>
          <option value='amount'>By Amount</option>
        </select>
        <DateRangePicker 
          startDate = {this.props.filters.startDate}
          endDate = {this.props.filters.endDate}
          onDatesChange = {this.onDatesChange} 
          focusedInput = {this.state.calenderFocused} 
          onFocusChange = {this.onFocusChange}
          endDateId={this.state.endDateId}
          startDateId = {this.state.startDateId}
          numberOfMonths = {1}
          isOutsideRange = {() => false}
          showClearDates = {true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}

export default connect(mapStateToProps)(ExpenseFilters);