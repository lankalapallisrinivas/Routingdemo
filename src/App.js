import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="clearfix">
        <Navbar />
        <section>
        <Switch>
          <div className="container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/about"  component={About}/>
          <Route path="/Services"  component={Services}/>
          </div>
        </Switch>
        </section>
        <section>
          <Footer />
        </section>
    </div>
    </Router>
  );
}

export default App;
