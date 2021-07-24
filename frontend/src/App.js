import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';

import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import './App.scss';


function App() {
  return (
    <div className="App">


      <Router>

        <Nav/>
        
        <Route exact path="/" component={ Landing }></Route>
        <Route path="/dash" component={ Dashboard }></Route>
        <Route path="/about" component={ About }></Route>


      </Router>

      <Footer/>

    </div>
  
  );
}

export default App;
