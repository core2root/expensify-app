import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description:'Water bill', amount:56587, createdAt:254857455454}));
store.dispatch(addExpense({description:'Gas bill', createdAt:954552360541}));
store.dispatch(addExpense({description:'Rent',amount: 524587, createdAt:95455230000}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
