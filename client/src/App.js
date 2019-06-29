import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Import Components
import Navbar from './components/navbar/navbar';
import Login from './components/user/Login';
import Signup from'./components/user/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section id='section'>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
