import {ExpenseList} from '../../components/expenseList';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});