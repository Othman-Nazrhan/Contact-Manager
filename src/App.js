import React from 'react';
import './App.css';
import Navbar from './compnents/navbar/navbar';
import Contact from './compnents/contact/contact';

function App() {
  return (
    <div className="App">

      <Navbar title="header"/>
       <Contact name="Client"/>
       <Contact />
    </div>
  );
}

export default App;
