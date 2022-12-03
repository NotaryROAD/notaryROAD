import React from 'react'
import { InlineWidget } from "react-calendly";
import JotformEmbed from 'react-jotform-embed';
import mainLogo from'./final_logo.svg';
import '../stylesheet/Appointment.css'
import { Link } from 'react-router-dom'

const Appointment = () => {
  // useEffect(() => {     
  //     const ifrm = document.getElementById("appointy-iframe");
  //         window.addEventListener("message", function (e) {
  //             const d = e.data || {};
  //             if (d.type === "height"){
  //                 ifrm.style.height = d.data + "px";
  //             }
  //             if (d.type === "scroll") {
  //                 ifrm.scrollIntoView();
  //             }
  //         });
  //    }
  //     ,[]);
  return (
    <>
    {/* <iframe id="appointy-iframe" class="no-border" src="https://booking.appointy.com/notaryroad?isgadget=1&autoheight=1"  scrolling="no" width="100%" frameBorder="0"></iframe>
<div style={{margin: 20}}>  */}
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
     <Link to='/signer-contact'><div className='submit-app'>SUBMIT</div></Link>
     </div>
    </>
  )
}
// http://localhost:3000//signer-contact
export default Appointment