import React from 'react';
import ExpenseList from './expenseList';
import ExpenseFilters from './ExpenseFilters';

const DashboardPage = () => (
  <div>
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;