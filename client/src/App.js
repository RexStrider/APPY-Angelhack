import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';
import Singup from'./components/Singup';

function App() {
  return (
    <div className="App">
      <Login />
      <Singup/>
    </div>
  );
}

export default App;
