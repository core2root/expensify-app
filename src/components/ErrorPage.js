import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage =()=>(
  <div>
    <p>Oops! looks like this page doesen't exist <b>CODE: 404</b> </p>
    <Link to='/'>Go Home</Link>
  </div>
);

export default ErrorPage;