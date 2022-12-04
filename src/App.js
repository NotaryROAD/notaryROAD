import './App.css';
import Appointment from './components/Appointment';
import UserType from './components/UserType';
import NotaryService from './components/NotaryService'
import QueryPage from './components/QueryPage'
import SignerContact from './components/SignerContact'
import Meeting from './components/Meeting'
import NotaryMeeting from './components/NotaryMeeting'
import NotaryForm from './components/NotaryForm'
import NotaryOptions from './components/NotaryOptions'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function AppointmentFunc() {
  return (
    <Appointment />
  );
}
function MeetingFunc(){
  return (<Meeting/>);
}
function NotaryServiceFunc() {
  return (
    <NotaryService />

  );
}
function QueryPageFunc() {
  return (
    <QueryPage />

  );
}
function SignerContactFunc() {
  return (
    <SignerContact />
  );
}

function NotaryMeetingFunc(){
  return (
    <NotaryMeeting/>
  )
}
function UserTypeFunc() {
  return (
    <UserType />
  );
}
function NotaryOptionsFunc(){
  return(
    <NotaryOptions/>
  )
}
function NotaryFormFunc(){
  return(
    <NotaryForm/>
  )
}
function App() {
  return (
    <>
    {/* <UserTypeFunc /> */}
    {/* <Router> */}
      <Routes>
   
       
        <Route path="/" element={<UserTypeFunc />} />
       
        <Route path="/appointment" element={<AppointmentFunc />} />
       
        <Route path="/signer-contact" element={<SignerContactFunc />} />
    
        <Route path="/notary-service" element={<NotaryServiceFunc />} />
   
        <Route path="/query" element={<QueryPageFunc />} />
        <Route path="/user-meeting" element={<MeetingFunc />} />
        <Route path="/notary" element={<NotaryOptionsFunc />} />
        <Route path="/notary-meeting" element={<NotaryMeetingFunc />} />
        <Route path="/notary-form" element={<NotaryFormFunc />} />
      </Routes>
    {/* </Router> */}

    </>
  );
}

export default App;