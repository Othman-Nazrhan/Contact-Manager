import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Button } from '@mui/material'

export default function NotFound() {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Typography variant="h4" component="h3" gutterBottom>
                Page Not Found
            </Typography>
            <Button variant="contained" component={Link} to="/">
                Back to Home Page
            </Button>
        </Box>
    )
}
