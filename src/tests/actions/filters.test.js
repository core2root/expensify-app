import { setStartDate, setEndDate, setTextFilter,
   setSortByDate, setSortByAmount } from '../../actions/filters';
import moment from 'moment';


test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(25000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(25000)
  });
});

test('should generate set text filter action with provided text value', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:'bill'
  });
});

test('should generate set text filter action with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  });
});

test('should set sort by amount action', () => {
  const action = setSortByAmount();
  expect(action).toEqual({type:"SORT_BY_AMOUNT"})
});

test('should set sort by date action', () => {
  const action = setSortByDate();
  expect(action).toEqual({type:"SORT_BY_DATE"})
})