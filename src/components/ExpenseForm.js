import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'; 

export default class ExpenseForm extends React.Component{
  constructor(props){
    super(props);

    const expense = props.expense;
    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount/100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calenderFocused: false,
      error: undefined
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt)
      this.setState(() => ({createdAt}));
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({calenderFocused: focused}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      //Set error state = Please provide description and amount
      this.setState(() => ({error: 'Please provide description and amount'}));
    }else{
      //Clear error
      this.setState(() => ({error: undefined}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render(){
    return(
      <div>
        <form onSubmit = {this.onSubmit}>
          {this.state.error && <p>{this.state.error}</p>}
          <input 
            type='text' 
            placeholder='Description' 
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange}/>

          <input 
            type='number' 
            placeholder='amount'
            value={this.state.amount}
            onChange={this.onAmountChange}/>

          <SingleDatePicker 
            date={this.state.createdAt}
            numberOfMonths = {1}
            onDateChange={this.onDateChange}
            focused = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            isOutsideRange={(day) => false }
          />

          <textarea
            placeholder='Add a note for this expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}>
          </textarea>

          <button>Add Expense</button>

        </form>
      </div>
    );
  }
}