import React, { Component } from 'react';
import { Provider } from './compnents/context'
import Contacts from './compnents/contact/Contacts';
import Navbar from './compnents/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import AddContact from './compnents/contact/AddContact';


class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">

          <Navbar title="Contactes List" />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
