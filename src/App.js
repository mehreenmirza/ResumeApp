import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Home />
      {/* Home */}
        {/* Name */}
        {/* General Info */}
        {/* Project Cards */}
      </Router>
    </div>
  );
}

export default App;
