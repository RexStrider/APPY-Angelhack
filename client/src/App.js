import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
=======
import { BrowserRouter, Route} from 'react-router-dom';

import logo from './logo.svg';
>>>>>>> 229741b31ff9e66128d0e0908bb2cd309416e9d6
import './App.css';

// Import Components
import Navbar from './components/navbar/navbar';
import Login from './components/user/Login';
import Signup from'./components/user/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
=======
        <section id='section'>
          <Route exact path="/" component={Singup} />
          <Route exact path="/login" component={Login} />
        </section>
>>>>>>> 229741b31ff9e66128d0e0908bb2cd309416e9d6
      </BrowserRouter>
    </div>
  );
}

export default App;
