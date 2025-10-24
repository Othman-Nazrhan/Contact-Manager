import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, List, ListItem, ListItemText, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { ExpandMore, Delete, Edit } from '@mui/icons-material';

class Contact extends Component {
  state = {
    showContactToggle: true,
    openDeleteDialog: false
  }

  showContact() {
    console.log('hello');
    //   change state
    this.setState({
      showContactToggle: !this.state.showContactToggle
    });
  }

  handleDeleteClick = () => {
    this.setState({ openDeleteDialog: true });
  }

  handleDeleteConfirm = (id, dispatch) => {
    // DELETE REQUEST WITH API
    Axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then(res => {
        dispatch(
          {
            type: 'DELETE_CONTACT',
            payload: id,
          }
        );
        // Show snackbar
        this.setState({
          snackbar: {
            open: true,
            message: 'Contact deleted successfully!',
            severity: 'success'
          }
        });
      })
      .catch(err => {
        console.error('error');
        this.setState({
          snackbar: {
            open: true,
            message: 'Failed to delete contact.',
            severity: 'error'
          }
        });
      })
    this.setState({ openDeleteDialog: false });
  }

  handleDeleteCancel = () => {
    this.setState({ openDeleteDialog: false });
  }

  render() {
    // input whith props
    const { id, name, email, phone } = this.props.data;
    // const myContact = this.props.data;

    return (
      <Consumer>{value => {
        const { dispatch } = value;
        return (
          <>
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {name}
                <div>
                  <IconButton onClick={this.showContact.bind(this, name)}>
                    <ExpandMore />
                  </IconButton>
                  <IconButton onClick={this.handleDeleteClick} color="error">
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
          </Card>
          <Dialog
            open={this.state.openDeleteDialog}
            onClose={this.handleDeleteCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete the contact "{name}"? This action cannot be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleDeleteCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleDeleteConfirm.bind(this, id, dispatch)} color="error" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
          </>
        )
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