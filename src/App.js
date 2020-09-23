import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Contact from './components/pages/Contact'
import Footer from './components/Footer';
import Consultor from './components/pages/Consultor'
import Cliente from './components/pages/Cliente'
import Transportista from './components/pages/Transportista'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/consultor" exact component={Consultor} />
          <Route path="/cliente" exact component={Cliente} />
          <Route path="/transportista" exact component={Transportista} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App
