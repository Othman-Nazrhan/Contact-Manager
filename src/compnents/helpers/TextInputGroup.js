import React from 'react'
import { TextField } from '@mui/material'

export default function TextInputGroup(props) {
  return (
    <TextField
      name={props.name}
      label={props.label}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      error={!!props.error}
      helperText={props.error}
      fullWidth
      margin="normal"
    />
  )
}
