import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import mainLogo from'./final_logo.svg';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import '../stylesheet/SignerContact.css'
var CryptoJS = require("crypto-js");
const SignerContact = () => {
  const [sessionID, setSessionID] = useState("");  
  function handleImageUpload(e) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result)
      const payLoadString = JSON.stringify(
        {
          image:
          {
            "context": "document-front",
            "content": `${reader.result.toString()}`,
            "timestamp": "2019-10-29T06:30:25.597Z"
          }
        })
      var signature = CryptoJS.HmacSHA256(payLoadString, 'b3c1dcd6-79f4-4483-9e73-2582e99dcc6a')
      var result = signature.toString(CryptoJS.enc.Hex);
      fetch(`https://stationapi.veriff.com/v1/sessions/${sessionID}/media`, {
        method: 'POST',
        body: payLoadString,
        headers: {
          'Content-Type': 'application/json', 'X-HMAC-SIGNATURE': result,
          'X-AUTH-CLIENT': '70c1c9d0-68b1-4364-a645-a274f674c746'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

        })
        .catch((err) => {
          console.log(err.message);
        });
    })
    console.log(e.target.files[0].type)
    reader.readAsDataURL(e.target.files[0]);
  }

  //FOR PATCH REQUEST
  function submitSession(e) {
    e.preventDefault();
    const payLoadString = JSON.stringify(
      {
        verification:
        {
          "status": "submitted",
          "timestamp": Date.now().toString()
        }
      })
    var signature = CryptoJS.HmacSHA256(payLoadString, 'b3c1dcd6-79f4-4483-9e73-2582e99dcc6a')
    var result = signature.toString(CryptoJS.enc.Hex);
    fetch(`https://stationapi.veriff.com/v1/sessions/${sessionID}`, {
      method: 'PATCH',
      body: payLoadString,
      headers: {
        'Content-Type': 'application/json', 'X-HMAC-SIGNATURE': result,
        'X-AUTH-CLIENT': '70c1c9d0-68b1-4364-a645-a274f674c746'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });


  }
  // FOR DATA example, firstname, lastname
  function handleDataClick(e) {
    e.preventDefault();
    fetch('https://stationapi.veriff.com/v1/sessions/', {    
      method: 'POST',
      body: JSON.stringify( {


        "verification": {
          "callback": "https://veriff.com",
          "person": {
              "firstName": "John",
              "lastName": "Smith"
          },
          "document": {
              "type": "PASSPORT",
              "country": "EE"
          },
          "vendorData": "unique id of a user",
          "timestamp": Date.now.toString()
      }
  }),
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-CLIENT': '70c1c9d0-68b1-4364-a645-a274f674c746'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSessionID(data.verification.id)
      })
      .catch((err) => {
        console.log(err.message);
      });

  }
  const handleSubmitData = (values) => {
    console.log(values)
  }
  const formik = useFormik({
    initialValues: {
      firstName: '', lastName: '', gender: '', number: '', country: ''
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 5));
      // handleDataClick(values)
      // const firstName = values.firstName;
      // const lastName = values.lastName;
      // const country = values.country
      // console.log(res)
      fetch('https://stationapi.veriff.com/v1/sessions/', {
        method: 'POST',
        body: JSON.stringify({
          verification: {
              "callback": "https://veriff.com",
              "person": {
                  "firstName": "his",
                  "lastName": "hsuh"
              },
              "document": {
                  "type": "PASSPORT",
                  "country": "3h"
              },
              "vendorData": "hehiu",
              "timestamp": "2016-05-19T08:30:25.597Z"
          }

      }),
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-CLIENT': '70c1c9d0-68b1-4364-a645-a274f674c746'
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setSessionID(data.verification.id)
        })
        .catch((err) => {
          console.log(err.message);
        });
  
    },

  });
  return (
    <>
    
    {/* <img src={mainLogo} style={{position: "absolute", top:2, left: 2}} /> */}
          {/* value={formik.values.firstName} */}
        <form onSubmit={formik.handleSubmit} className='signer-contact'>
        <h3 style={{marginBottom: 12}}>Contact Information</h3>
          <TextField sx={{
            width: 500, marginBottom: 2,
          }} 
          name="firstName"
          onChange={formik.handleChange}
          id="standard-basic" required variant="standard" placeholder='First Name' />
    
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic"
          onChange={formik.handleChange}
         
          name="lastName" required variant="standard" placeholder='Last Name' />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic"     onChange={formik.handleChange} name="gender" required variant="standard" placeholder='Gender' />
          {/* FOR  DOCUMENT */}
          <h3>Document</h3>
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="number"     onChange={formik.handleChange} required placeholder="Number" variant="standard" />
          <TextField sx={{
            width: 500,
            marginBottom: 2
          }} id="standard-basic" name="country"     onChange={formik.handleChange} required placeholder="Country" variant="standard" />
          {/* <button type="submit">Submit</button> */}
        </form>
        <div className="submit-btn">
        <Button variant="outlined" onClick={handleDataClick} style={{marginBottom: 10}}>Submit Data</Button>
        <Button variant="outlined">Upload Docs</Button>
        </div>
      {/* <button onClick={handleDataClick}>Submit Data</button>
      <input style={{ display: 'none' }} id='fileUpload' type='file' onChange={handleImageUpload} />
      <button variant="outlined"><label htmlFor='fileUpload'>Upload Document</label></button>
      <button onClick={submitSession}>SUBMIT DETAILS</button> */}
    </>
  )
}

export default SignerContact