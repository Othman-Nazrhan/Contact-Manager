import React, { Component } from 'react'
import { Consumer } from '../context';
import Axios from 'axios'
import { Card, CardContent, Typography, Button, TextField } from '@mui/material'

class EditContact extends Component {


    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        try {
            const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            this.setState({

                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone

            })
        }

        catch (e) {
            console.log(e)
        }
    }

    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

    Submit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if (name === "") {
            this.setState({ errors: { name: "this name is requred" } })
            return;
        }
        if (email === "") {
            this.setState({ errors: { email: 'this email is requred' } })
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: 'this phone is requred' } })
            return;
        }

        // POST REQUEST WITH API
        const upContact = {
            name,
            email,
            phone
        }

        const id =this.props.match.params.id;

        Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
            .then(res => {
                dispatch({
                    type: "UPDATE_CONTACT",
                    payload: res.data
                });
                // Show snackbar
                this.setState({
                    snackbar: {
                        open: true,
                        message: 'Contact updated successfully!',
                        severity: 'success'
                    }
                });
            })
            .catch(err => {
                console.error('error');
                this.setState({
                    snackbar: {
                        open: true,
                        message: 'Failed to update contact.',
                        severity: 'error'
                    }
                });
            })

        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                errors: {}
            }
        )

        // reduction link
        this.props.history.push('/');

    }
    render() {

        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 4 }}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    Edit Contact
                                </Typography>
                                <form onSubmit={this.Submit.bind(this, dispatch)}>
                                    <TextField
                                        name="name"
                                        label="Name"
                                        value={name}
                                        type="text"
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        onChange={this.onChangeInput}
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        name="email"
                                        label="Email"
                                        value={email}
                                        type="email"
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        onChange={this.onChangeInput}
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        name="phone"
                                        label="Phone"
                                        value={phone}
                                        type="tel"
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        onChange={this.onChangeInput}
                                        fullWidth
                                        margin="normal"
                                    />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ marginTop: 2 }}
                                    >
                                        Edit Contact
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    )
                }
                }
            </Consumer>
        )




    }
}
export default EditContact;
