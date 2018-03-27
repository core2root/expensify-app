import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('should render correctly expenses summary with 1 expense', () => {
 const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={25.36} />);
 expect(wrapper).toMatchSnapshot();
});

test('should render correctly expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={25} expensesTotal={2565.76} />);
  expect(wrapper).toMatchSnapshot();
});