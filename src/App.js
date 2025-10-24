import React from 'react';

import Contacts from './components/contact/Contacts';
import Navbar from './components/navbar/navbar';
import './App.css';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title="Contact Manager" />
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
          <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/AddContact' component={AddContact} />
            <Route exact path="/EditContact/:id" component={EditContact} />
            <Route exact path='/About' component={About} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
