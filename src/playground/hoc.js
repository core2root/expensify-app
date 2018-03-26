//Higher order Componenet (HOC)
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is about: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info please don't share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const Auth = () => (
  <div>
    <p>You need to log in to see this information. </p>
    <input type = 'text' placeholder = 'username..'/><br></br>
    <input type = 'password' placeholder = 'password...'/><br></br>
    <button> Log In </button>
  </div>
);

const requireAuth = (WrappedComponent) => {
  return(props) => (
    <div>
      {props.isLoggedIn ? <WrappedComponent {...props} /> : <Auth />}
    </div>
  );
}



const AdminInfo = withAdminWarning(Info);
const RequireAuth = requireAuth(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info='Maksim Novikov'/>, document.getElementById('app'));
ReactDOM.render(<RequireAuth info='Maksim Novikov' isLoggedIn={false} />, document.getElementById('app'));