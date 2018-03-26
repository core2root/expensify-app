import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import ErrorPage from '../../components/ErrorPage';

test('should render page not found correctly', () => {
  const wrapper = shallow(<ErrorPage />);
  expect(wrapper).toMatchSnapshot();
});
