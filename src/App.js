import React from 'react';

// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import './App.css';


import Header from './components/header';
import Navbar from './navbar';


function App() {
  return (
    <React.Fragment>

     < Header />

     <Navbar />
   
    </React.Fragment>

  );
}

export default App;
