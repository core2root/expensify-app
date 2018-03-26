import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import AddPage from '../components/AddPage';
import EditPage from '../components/EditPage';
import ErrorPage from '../components/ErrorPage';
import HelpPage from '../components/HelpPage';
import DashboardPage from '../components/DashboardPage';


const AppRouter = () => (
<BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path = '/' component = {DashboardPage} exact = {true}/>
      <Route path = '/create' component = {AddPage}/>
      <Route path ='/edit/:id' component ={EditPage} />
      <Route path ='/help' component={HelpPage}/>
      <Route  component={ErrorPage}/>
    </Switch>
  </div>
  </BrowserRouter>
);

export default AppRouter;