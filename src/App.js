import React, { Component } from 'react';

import Contacts from './compnents/contact/Contacts';
import Navbar from './compnents/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import'font-awesome/css/font-awesome.min.css';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbar title="Contactes List" />
        <Contacts />
       
      </div>
    );
  }
}

export default App;
