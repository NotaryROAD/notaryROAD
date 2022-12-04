import React from 'react'
import {Link} from 'react-router-dom'
import mainLogo from'./notary.svg';
import Button from '@mui/material/Button';
const NotaryOptions = () => {
  return (
    <>
      <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
      <div className="notary-options">
    <Link to='/notary-meeting'><div className='same-div'>Notary Session</div> 
    </Link>
    <Link to='/notary-form'><div className='same-div'>Upload data</div></Link>
    </div>
    <Link to='/'><div className='home-styles'>Home</div></Link>
    </>
  )
}

export default NotaryOptions