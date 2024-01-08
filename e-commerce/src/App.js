import logo from './logo.svg';
import './App.css';
import React  from 'react';

import Home from './Component/Home';
import  Foot  from './Component/Footer';

function App() {
  return (
  <React.Fragment>
  <Home/>
  <Foot/>
  </React.Fragment>
  );
}

export default App;
