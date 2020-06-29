import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBit from './bit_comps/appBit';
import AppCartoon from './cartoon_comps/appCartoon';

function App() {
  return (
    <div className="App">
      App Work
      <AppCartoon/>
      <AppBit/>
    </div>
  );
}

export default App;
