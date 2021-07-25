import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Market from './Pages/Market/Market';
import Settings from './Pages/Settings/Settings';
import SignUp from './Pages/SignUp/SignUp';

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

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
          <Route path="/signup" component={ SignUp }></Route>
          <Route path="/login" component={ Login }></Route>

        </main>
          
        


        <Footer/>
      </Router>


    </div>
  
  );
}

export default App;
