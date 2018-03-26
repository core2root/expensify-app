import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Add
const addExpanse = (
  { description = '', note = '', amount = 0, createdAt = 0 }
    = {}) => ({
      type: 'ADD_EXPENSE',
      expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
      }
    })

//Remove
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

//Edit
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

//Set Text Filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
});

//Set sort by amount
const setSortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//Set sort by date
const setSortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//Set start date
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate: startDate
});

//Set end date
const setEndDate = (endtDate) => ({
  type:'SET_END_DATE',
  endDate: endtDate
});

//Expenses reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        return expense.id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

//Filters reducer
const filtersReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) =>{

  return expenses.filter((expense) => {
    const starDatetMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
    return starDatetMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1: -1;
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1:-1;
    }
  });
}

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpanse({ description: 'rent', amount: 10000000, createdAt:-1000 }))
const exp2 = store.dispatch(addExpanse({ description: 'New car', amount: 120547, createdAt:2000 }))
const exp3 = store.dispatch(addExpanse({ description: 'new PC', amount: 3524870, createdAt:500 }))

store.dispatch(setSortByAmount());

//store.dispatch(setTextFilter('new'));
//store.dispatch(setStartDate(450));
/*
store.dispatch(removeExpense({ id: exp3.expense.id }));

store.dispatch(editExpense(exp2.expense.id, {
  amount: 500000,
  note: 'new note here'
}));

store.dispatch(setSortByDate()); */

/* 
store.dispatch(setEndDate(350));
store.dispatch(setStartDate());
store.dispatch(setEndDate()); */

const demoState = {
  expenses: [{
    id: 'ab34_565',
    description: 'January rent',
    note: 'This is final payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};


/*
const user = {
  name:'maks',
  ae:24
};

console.log(user);
console.log({...user, name:'piter',isActive:true}) */