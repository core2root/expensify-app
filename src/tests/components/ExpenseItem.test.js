import ExpenseItem from '../../components/expenseItem';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should render expense item with provided expense object', () => {
  const wrapper = shallow(<ExpenseItem  {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});

