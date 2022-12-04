import React, {useState, useEffect} from 'react'
import {JitsiMeeting} from '@jitsi/react-sdk'
import { Link } from 'react-router-dom'
import mainLogo from'./notary.svg';
// URL - /user-meeting
  const Meeting = () => {
    return(<>
    <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
       <div className='content-meet'>
        <h3> Meeting with notary </h3>
        <p>Meeting URL: <a href="https://meetings.dialpad.com/room/notaryroad" target="blank">https://meetings.dialpad.com/room/notaryroad</a></p>
    <p>Dial in number: 781-448-4019</p>
    <p>PIN: 59208</p>
        </div>
      <Link to='/'><div className='home-styles'>Home</div></Link>
    </>)
}
export default Meeting