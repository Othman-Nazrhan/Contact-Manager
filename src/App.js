import React, { Component } from 'react';
import { Provider } from './compnents/context'
import Contacts from './compnents/contact/Contacts';
import Navbar from './compnents/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import AddContact from './compnents/contact/AddContact';
import About from './compnents/pages/About'
import NotFound from './compnents/pages/NotFound'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">

            <Navbar title="Contactes List" />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={ Contacts } />
                <Route exact path='/AddContact' component={ AddContact }  />
                <Route exact path='/About' component={ About}  />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
