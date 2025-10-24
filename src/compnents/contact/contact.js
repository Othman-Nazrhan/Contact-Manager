import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, List, ListItem, ListItemText, Collapse } from '@mui/material';
import { ExpandMore, Delete, Edit } from '@mui/icons-material';

class Contact extends Component {
  state = {
    showContactToggle: true
  }

  showContact() {
    console.log('hello');
    //   change state
    this.setState({
      showContactToggle: !this.state.showContactToggle
    });
  }

  onDeleteClick = (id, dispatch) => {
    // DELETE REQUEST WITH API
    Axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => dispatch(
        {
          type: 'DELETE_CONTACT',
          payload: id,
        }
      ))
      .catch(err => console.error('error'))
  }

  render() {
    // input whith props
    const { id, name, email, phone } = this.props.data;
    // const myContact = this.props.data;

    return (
      <Consumer>{value => {
        const { dispatch } = value;
        return (
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {name}
                <div>
                  <IconButton onClick={this.showContact.bind(this, name)}>
                    <ExpandMore />
                  </IconButton>
                  <IconButton onClick={this.onDeleteClick.bind(this, id, dispatch)} color="error">
                    <Delete />
                  </IconButton>
                  <Link to={`EditContact/${id}`}>
                    <IconButton color="warning">
                      <Edit />
                    </IconButton>
                  </Link>
                </div>
              </Typography>
              <Collapse in={this.state.showContactToggle}>
                <List>
                  <ListItem>
                    <ListItemText primary={email} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={phone} />
                  </ListItem>
                </List>
              </Collapse>
            </CardContent>
          </Card>)
      }
      }
      </Consumer>
    )
  }
}

// la valeur par defut 
Contact.defaultProps = {
  name: "unkouni",
  email: "unkouni@gmail.com",
  tel: "00000000"
}

Contact.prototypes = {
  data: PropTypes.object.isRequred,
}

export default Contact;