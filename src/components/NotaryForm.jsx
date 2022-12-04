
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import mainLogo from'./notary.svg';
import { useFormik } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import '../stylesheet/SignerContact.css'

const NotaryForm = () => {
    const formik = useFormik({
        initialValues: {
          notaryName: '', commissionNumber: '', Date: '', VideoConference: '', signerName: '',
          idType:'', city:'', state:'', documentType:'', idVerification:''
        },
        onSubmit: (values) => {
            console.log(values)
        }})
  return (
    <>
  <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
        <form onSubmit={formik.handleSubmit} style={{margin: 20}}className='submit-btn'>
        <h3 style={{marginBottom: 12}}>Upload to blockchain</h3>
          <TextField sx={{
            width: 500, marginBottom: 2,
          }} 
          name="notaryName"
          onChange={formik.handleChange}
          id="standard-basic" required variant="standard" placeholder='Your Name' />
    
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic"
          onChange={formik.handleChange}
          name="commissionNumber" required variant="standard" placeholder='Commission Number' />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic"     onChange={formik.handleChange} name="Date" required variant="standard" placeholder='Date' />
      
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="VideoConference" onChange={formik.handleChange} required placeholder="Video Conference" variant="standard" />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="SignerName" onChange={formik.handleChange} required placeholder="Signer Name" variant="standard" />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="idType" onChange={formik.handleChange} required placeholder="ID Type" variant="standard" />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="city" onChange={formik.handleChange} required placeholder="City" variant="standard" />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="state" onChange={formik.handleChange} required placeholder="State" variant="standard" />
            <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="documentType" onChange={formik.handleChange} required placeholder="Document Type" variant="standard" />
            <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="idVerification" onChange={formik.handleChange} required placeholder="ID Verification Type" variant="standard" />
           <Button variant="outlined" type="submit" style={{marginBottom: 10}}>Submit Data</Button>
        </form>
        <div className="submit-btn">
        <a href=" https://ap1.storj.io/new-project-dashboard" target="_blank" rel="noreferrer">
        <Button variant="outlined" style={{marginBottom: 10}}>Upload</Button>
        </a>
        </div>
    </>
  )
}

export default NotaryForm