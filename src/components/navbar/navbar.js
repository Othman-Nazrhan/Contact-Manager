import React from 'react'
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material'
import { Brightness4 } from '@mui/icons-material'

const Navbar = (props) => {

  const { title } = props;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/About">About</Button>
          <Button color="inherit" component={Link} to="/AddContact">Add</Button>
          <IconButton color="inherit">
            <Brightness4 />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}
export default Navbar;
