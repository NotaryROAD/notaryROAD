
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import mainLogo from './notary.svg';
import { useFormik } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import '../stylesheet/SignerContact.css'
import S3 from "aws-sdk/clients/s3";
import { FileUpload } from '@mui/icons-material';
const accessKeyId = "jv72mlpy23l5fqysecocv5n5di3a";
const secretAccessKey = "j34ca4hcmb4alhtxcdid3aky4o4gw4kapiea4campsz443w4q2eto";
const endpoint = "https://gateway.storjshare.io";

const s3 = new S3({
  accessKeyId,
  secretAccessKey,
  endpoint,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  connectTimeout: 0,
  httpOptions: { timeout: 0 }
});
async function ListB() {
  const { Buckets } = await s3.listBuckets({}).promise();
  console.log(Buckets);
};
async function fileUpload(f) {
  // console.log(f)

  const params = {
    Bucket: "final-bucket",
    Key: "sugar find small basket world borrow vote style diagram olive result next",
    Body: f
  };
  const result = await s3.upload(params, {
    partSize: 64 * 1024 * 1024
  }).promise();
  console.log(result)
  const params1 = {
    Bucket: "final-bucket",
    Key: "sugar find small basket world borrow vote style diagram olive result next"
  }
  const url = s3.getSignedUrl("getObject", params1);
  console.log(url)
}

async function getBlob(e) {
  e.preventDefault();
  let files = e.target.files;
  let file = files[0]
  let fileType = file.type
  const uarray = new Uint8Array(await file.arrayBuffer())
  // let rawData = [...uarray]
  // let blob1 = new Blob([new Uint8Array(rawData)], {type: {fileType}})
  // fileUpload(URL.createObjectURL(blob1)) 
  let blob3 = new Blob([uarray], { type: { fileType } })
  fileUpload(blob3)
}

const NotaryForm = () => {
  const formik = useFormik({
    initialValues: {
      notaryName: '', commissionNumber: '', Date: '', VideoConference: '', signerName: '',
      idType: '', city: '', state: '', documentType: '', idVerification: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <>
      <img src={mainLogo} style={{ position: "absolute", top: 2, left: 2, width: 200 }} />
      <form onSubmit={formik.handleSubmit} style={{ margin: 20 }} className='submit-btn'>
        <h3 style={{ marginBottom: 12 }}>Upload to blockchain</h3>
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
        }} id="standard-basic" onChange={formik.handleChange} name="Date" required variant="standard" placeholder='Date' />

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
        <Button variant="outlined" type="submit" style={{ marginBottom: 10 }}>Submit Data</Button>
      </form>
      <div className="submit-btn">
      <Button
        variant="outlined"
        component="label"
      >
        Upload
        <input
          type="file"
          hidden
          onChange={getBlob}
        />
      </Button>
      </div>
    </>
  )
}

export default NotaryForm