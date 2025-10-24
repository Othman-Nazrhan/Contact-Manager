import React, { useState } from 'react'
import Contact from './contact'
import { Consumer } from '../context'
import { TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Grid, Paper, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Contacts() {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const onSortChange = (e) => {
        setSortBy(e.target.value);
    }

    return (
        <Consumer>{value => {
            const { contacts } = value;

            // Filter contacts based on search
            let filteredContacts = contacts.filter(contact =>
                contact.name.toLowerCase().includes(search.toLowerCase()) ||
                contact.email.toLowerCase().includes(search.toLowerCase())
            );

            // Sort contacts
            filteredContacts.sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortBy === 'email') {
                    return a.email.localeCompare(b.email);
                } else if (sortBy === 'phone') {
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
                                    value={search}
                                    onChange={onSearchChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel>Sort By</InputLabel>
                                    <Select
                                        value={sortBy}
                                        onChange={onSortChange}
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

export default Contacts;
