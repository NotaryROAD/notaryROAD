import React from 'react'
import mainLogo from'./final_logo.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../stylesheet/QueryPage.css'
import TextField from '@mui/material/TextField'
const QueryPage = () => {
  return (
    <>
      <div className='query'>

        <TextField sx={{
          width: 500,
          marginBottom: 2
        }} id="standard-basic" label="First name" variant="standard" />
        <TextField sx={{
          width: 500,
          marginBottom: 2
        }} id="standard-basic" label="Last name" variant="standard" />
        <TextField sx={{
          width: 500,
          marginBottom: 2
        }} id="standard-basic" label="Phone number" variant="standard" />
        <TextField
          sx={{
            width: 500,
            marginBottom: 2
          }}
          id="standard-multiline-static"
          label="Problems/ issues"
          multiline
          rows={3}
          variant="standard"
        />
        <Button variant="outlined">Submit</Button>
      </div>

    </>

  )
}

export default QueryPage