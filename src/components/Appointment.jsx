import React from 'react'
import { InlineWidget } from "react-calendly";
import JotformEmbed from 'react-jotform-embed';
import '../stylesheet/Appointment.css'
import { Link } from 'react-router-dom'
import mainLogo from'./notary.svg';
const Appointment = () => {
  
  return (
    <>
    <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
    
<div style={{margin: 20}}>  
<div className='flex-box'>
      <InlineWidget
      url='https://calendly.com/akanksha-t05/30min'
      styles={{
        height: "650px",
        margin: 0,
      }}
      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        primaryColor: "059669",
      }}
    />
   </div>
 
     
     <JotformEmbed src="https://form.jotform.com/223332088505048" />
     <Link to='/signer-contact'><div className='submit-app'>PROCEED</div></Link>
     </div>
    </>
  )
}
// http://localhost:3000//signer-contact
export default Appointment