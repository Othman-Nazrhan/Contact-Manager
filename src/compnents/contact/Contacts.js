import React, { Component } from 'react'
import Contact from './contact'
import { Consumer } from '../context'
import { TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Grid, Paper, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'

class Contacts extends Component {
    state = {
        search: '',
        sortBy: 'name'
    }

    onSearchChange = (e) => {
        this.setState({ search: e.target.value })
    }

    onSortChange = (e) => {
        this.setState({ sortBy: e.target.value })
    }

    render() {
        return (
            <Consumer>{value => {
                const { contacts } = value;
                console.log(contacts);

                // Filter contacts based on search
                let filteredContacts = contacts.filter(contact =>
                    contact.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
                    contact.email.toLowerCase().includes(this.state.search.toLowerCase())
                );

                // Sort contacts
                filteredContacts.sort((a, b) => {
                    if (this.state.sortBy === 'name') {
                        return a.name.localeCompare(b.name);
                    } else if (this.state.sortBy === 'email') {
                        return a.email.localeCompare(b.email);
                    } else if (this.state.sortBy === 'phone') {
                        return a.phone.localeCompare(b.phone);
                    }
                    return 0;
                });

                return (
                    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
                        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
                                Contact Manager
                            </Typography>
                            <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
                                Total Contacts: {filteredContacts.length}
                            </Typography>
                            <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        label="Search Contacts"
                                        variant="outlined"
                                        value={this.state.search}
                                        onChange={this.onSearchChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel>Sort By</InputLabel>
                                        <Select
                                            value={this.state.sortBy}
                                            onChange={this.onSortChange}
                                            label="Sort By"
                                        >
                                            <MenuItem value="name">Name</MenuItem>
                                            <MenuItem value="email">Email</MenuItem>
                                            <MenuItem value="phone">Phone</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Grid container spacing={2}>
                            {filteredContacts.map((contact) => (
                                <Grid item xs={12} sm={6} md={4} key={contact.id}>
                                    <Contact data={contact} />
                                </Grid>
                            ))}
                        </Grid>
                        <Fab
                            color="primary"
                            aria-label="add"
                            component={Link}
                            to="/AddContact"
                            sx={{ position: 'fixed', bottom: 16, right: 16 }}
                        >
                            <Add />
                        </Fab>
                    </Box>
                );
            }}
            </Consumer>
        );
    }
}

export default Contacts;
