import React, {useState, useEffect} from 'react'
import {JitsiMeeting} from '@jitsi/react-sdk'
import { Link } from 'react-router-dom'
import mainLogo from'./notary.svg';
// URL - /user-meeting
  const Meeting = () => {
    return(<>
    <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
       <div className='content-meet'>
        <p> MEETING WITH NOTARY  </p>
        <p>link : https://meet.jit.si/Notary</p>
        </div>
      <Link to='/'><div className='home-styles'>Home</div></Link>
    </>)
}
export default Meeting