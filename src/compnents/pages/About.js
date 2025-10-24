import React from 'react'
import { Typography, Box, Paper } from '@mui/material'

export default function About() {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
                <Typography variant="h4" component="h3" gutterBottom>
                    About Contact Manager
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to Contact Manager, a simple and efficient application designed to help you organize and manage your contacts effortlessly.
                </Typography>
                <Typography variant="body1" paragraph>
                    With this app, you can add new contacts, edit existing ones, and view all your contacts in a clean, user-friendly interface. Built with React and Material-UI, it provides a modern and responsive experience across all devices.
                </Typography>
                <Typography variant="body1" paragraph>
                    Features include:
                    <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                        <li>Add, edit, and delete contacts</li>
                        <li>Search contacts by name or email</li>
                        <li>Sort contacts by name, email, or phone</li>
                        <li>Confirmation dialog for delete actions</li>
                        <li>Snackbar notifications for actions</li>
                        <li>Contact counter on the home page</li>
                        <li>Dark mode toggle in the navbar</li>
                        <li>Responsive design for mobile and desktop</li>
                        <li>Intuitive navigation with React Router</li>
                        <li>State management with Redux</li>
                    </ul>
                </Typography>
                <Typography variant="body1">
                    Start managing your contacts today and stay organized!
                </Typography>
            </Paper>
        </Box>
    )
}
