import React, { Component } from 'react';

import Contacts from './compnents/contact/Contacts';
import Navbar from './compnents/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import AddContact from './compnents/contact/AddContact';
import EditContact from './compnents/contact/EditContact';
import About from './compnents/pages/About'
import NotFound from './compnents/pages/NotFound'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

  render() {
    return (
    
        <Router>
          <div className="App">
            <Navbar title="Contact Manager" />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={ Contacts } />
                <Route exact path='/AddContact' component={ AddContact }  />
                <Route exact path="/EditContact/:id" component={ EditContact }  />
                <Route exact path='/About' component={ About}  />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </div>
        </Router>
     
    );
  }
}

export default App;
