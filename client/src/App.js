import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import './App.css';

// Import Components
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import Login from './components/user/Login';
import Signup from'./components/user/Signup';
import FModal from'./components/home/FModal';
import ForgotPassword from "./components/user/PasswordReset/ForgotPassword";
import ResetPassword from "./components/user/PasswordReset/ResetPassword";
import Profile from './components/user/UserProfile/UserProfile';
import EditProfile from './components/user/UserActions/EditUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
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
