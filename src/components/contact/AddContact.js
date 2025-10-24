import React, { useState } from 'react'
import { Consumer } from '../context';
import Axios from 'axios'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import TextInputGroup from '../helpers/TextInputGroup'

function AddContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
  }

  const Submit = (dispatch, e) => {
    e.preventDefault();

    if (name === "") {
      setErrors({ name: "this name is required" });
      return;
    }
    if (email === "") {
      setErrors({ email: 'this email is required' });
      return;
    }
    if (phone === "") {
      setErrors({ phone: 'this phone is required' });
      return;
    }

    // POST REQUEST WITH API
    const newContact = { name, email, phone }

    Axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => {
        dispatch({
          type: "ADD_CONTACT",
          payload: newContact
        });
        // Show snackbar
        setErrors({
          snackbar: {
            open: true,
            message: 'Contact added successfully!',
            severity: 'success'
          }
        });
      })
      .catch(err => {
        // Handle error silently or log appropriately
        setErrors({
          snackbar: {
            open: true,
            message: 'Failed to add contact.',
            severity: 'error'
          }
        });
      })

    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    // redirect link
    history.push('/');
  }

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 4 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Add Contact
              </Typography>
              <form onSubmit={(e) => Submit(dispatch, e)}>
                <TextInputGroup
                  name="name"
                  label="Name"
                  value={name}
                  type="text"
                  error={errors.name}
                  onChange={onChangeInput}
                />

                <TextInputGroup
                  name="email"
                  label="Email"
                  value={email}
                  type="email"
                  error={errors.email}
                  onChange={onChangeInput}
                />

                <TextInputGroup
                  name="phone"
                  label="Phone"
                  value={phone}
                  type="tel"
                  error={errors.phone}
                  onChange={onChangeInput}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginTop: 2 }}
                >
                  Add New Contact
                </Button>
              </form>
            </CardContent>
          </Card>
        )
      }}
    </Consumer>
  )
}

export default AddContact;
