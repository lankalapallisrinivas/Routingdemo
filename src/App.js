import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container-fluid">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about"  component={About}/>
          <Route path="/Services"  component={Services}/>
          <About/>
          <Services />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
