import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './Main/main';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainPage} />
      </Router>
    </div>
  );
}

export default App;
