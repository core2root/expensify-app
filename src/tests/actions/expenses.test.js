import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense actions object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should update expense object with provided id and updates', () => {
  const action = editExpense('123abc', { note: 'updated note' });
  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    updates: { note: 'updated note' }
  });
});

test('should setup add expense action object with provided calues', () => {
  const expenseData = {
    description: 'Rent',
    amount: 100200,
    createdAt: 10000,
    note: 'last month rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      amount: 0,
      createdAt: 0,
      description: '',
      note: '',
      id: expect.any(String)
    }
  });
});