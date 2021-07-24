import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard';
import Market from './Pages/Market/Market';

import About from './Pages/About/About';
import Settings from './Pages/Settings/Settings';


import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

import './App.scss';


function App() {
  return (
    <div className="App">


      <Router>


        <header>
          <p>spects.io</p>
          
          <Nav/>
        </header>

        <main>
          <Route exact path="/" component={ Landing }></Route>
          <Route path="/dash" component={ Dashboard }></Route>
          <Route path="/market" component={ Market }></Route>
          <Route path="/settings" component={ Settings }></Route>
          <Route path="/about" component={ About }></Route>
        </main>
          
        


        <Footer/>
      </Router>


    </div>
  
  );
}

export default App;
