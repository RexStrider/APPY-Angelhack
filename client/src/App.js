import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import './App.css';

// Import Components
import Navbar from './components/navbar/Navbar';
import Login from './components/user/Login';
import Signup from'./components/user/Signup';
import ForgotPassword from "./components/user/PasswordReset/ForgotPassword";
import ResetPassword from "./components/user/PasswordReset/ResetPassword";
import Profile from './components/user/UserProfile/UserProfile';
import EditProfile from './components/user/UserActions/EditUser';
import Users from '../src/components/matching/matching'  ;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/matching" component={Users} />
          <Route
                  exact
                  path="/reset-password/:resetPasswordToken"
                  component={ResetPassword}
            />
          {/* Private Route */}
          <PrivateRoute exact path="/user/:userId" component={Profile} />
          <PrivateRoute
                    exact
                    path="/user/edit/:userId"
                    component={EditProfile}
                />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
