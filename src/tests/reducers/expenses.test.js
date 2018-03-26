import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id:expenses[1].id};
  const state = expensesReducer(expenses, action);
  //expect to have new array without the '1' expense
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]])
});

test('should not remove expense with wrong_id', () => {
  const action = {type: 'REMOVE_EXPENSE', id:'wrong_id'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add new expense', () => {
  const expense = {
    id: '109',
    description: 'New Expense',
    createdAt: 15000,
    amount: 134555,
    note: ''
  };
  const action = {type: 'ADD_EXPENSE', expense};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense with provided id', () => {
  const edits = {
    description: 'Edited description'
  };
  const action = {type: 'EDIT_EXPENSE', id: expenses[1].id, updates: edits};
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Edited description');
});

test('should edit expense with provided id', () => {
  const edits = {
    description: 'Edited description'
  }
  const action = {type: 'EDIT_EXPENSE', id: 'wrong_id', updates: edits};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
