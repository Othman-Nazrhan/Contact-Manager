import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, List, ListItem, ListItemText, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { ExpandMore, Delete, Edit } from '@mui/icons-material';

function Contact({ data }) {
  const { id, name, email, phone } = data;
  const [showContactToggle, setShowContactToggle] = useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const showContact = () => {
    setShowContactToggle(!showContactToggle);
  }

  const handleDeleteClick = () => {
    setOpenDeleteDialog(true);
  }

  const handleDeleteConfirm = (id, dispatch) => {
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
        setOpenDeleteDialog({
          snackbar: {
            open: true,
            message: 'Contact deleted successfully!',
            severity: 'success'
          }
        });
      })
      .catch(err => {
        // Handle error silently or log appropriately
        setOpenDeleteDialog({
          snackbar: {
            open: true,
            message: 'Failed to delete contact.',
            severity: 'error'
          }
        });
      })
    setOpenDeleteDialog(false);
  }

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
  }

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
                <IconButton onClick={showContact}>
                  <ExpandMore />
                </IconButton>
                <IconButton onClick={handleDeleteClick} color="error">
                  <Delete />
                </IconButton>
                <Link to={`EditContact/${id}`}>
                  <IconButton color="warning">
                    <Edit />
                  </IconButton>
                </Link>
              </div>
            </Typography>
            <Collapse in={showContactToggle}>
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
          open={openDeleteDialog}
          onClose={handleDeleteCancel}
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
            <Button onClick={handleDeleteCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleDeleteConfirm(id, dispatch)} color="error" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        </>
      )
    }}
    </Consumer>
  )
}

// Default props
Contact.defaultProps = {
  data: {
    name: "unkouni",
    email: "unkouni@gmail.com",
    phone: "00000000"
  }
}

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default Contact;
