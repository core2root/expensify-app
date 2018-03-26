import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sort by date' , ()=>{
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const action = {type: 'SORT_BY_DATE'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'bill'});
  expect(state.text).toBe('bill');
});

test('should set start date filter', () => {
  const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate: 10000});
  expect(state.startDate).toBe(10000);
});

test('should set end date filter', () => {
  const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate: 10000});
  expect(state.endDate).toBe(10000);
});