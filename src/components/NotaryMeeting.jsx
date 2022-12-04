import React from 'react'
import { Link } from 'react-router-dom'
import {JitsiMeeting} from '@jitsi/react-sdk'
import mainLogo from'./notary.svg';
// URL - /notary-meeting
const NotaryMeeting = () => {
  return (
    <>
      <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
    <div className='content-meet'><p>Notary Session</p>
    <p> link : https://meet.jit.si/Notary</p>
      </div>
      <Link to='/'><div className='home-styles'>Home</div></Link>
         {/* <JitsiMeeting
     roomName = "Notary"
     configOverwrite = {{
         // startWithAudioMuted: true,
         // disableModeratorIndicator: false,
         // startScreenSharing: true,
         enableEmailInStats: false,
         recordingService: {
         enabled: true,
         hideStorageWarning: true,
         sharingEnabled: true
      },
      localRecording: {
         // Whether to disable local recording or not.
         disable: false,
         // Whether to notify all participants when a participant is recording locally.
         notifyAllParticipants: false,
         // Whether to disable the self recording feature (only local participant streams).
         disableSelfRecording: false,
     },
     }}
     interfaceConfigOverwrite = {{
         DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
     }}
     userInfo = {{
         displayName: 'YOUR_USERNAME'
     }}
     onApiReady = { (externalApi) => {
         // here you can attach custom event listeners to the Jitsi Meet External API
         // you can also store it locally to execute commands
     } }
     getIFrameRef = { (iframeRef) => { iframeRef.style.height = '700px'; } }
 /> */}
     </>)
  
}

export default NotaryMeeting

