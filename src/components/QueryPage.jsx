import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../stylesheet/QueryPage.css'
import TextField from '@mui/material/TextField'
import mainLogo from'./notary.svg';
const QueryPage = () => {
  return (
    <>
      <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
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