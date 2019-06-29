import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Singup from'./components/Singup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section id='section'>
          <Route exact path="/" component={Singup} />
          <Route exact path="/login" component={Login} />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
