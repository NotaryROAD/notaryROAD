import './App.css';
import Appointment from './components/Appointment';
import UserType from './components/UserType';
import NotaryService from './components/NotaryService'
import QueryPage from './components/QueryPage'
import SignerContact from './components/SignerContact'
import Meeting from './components/Meeting'
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


function UserTypeFunc() {
  return (
    <UserType />
  );
}
function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<UserTypeFunc />} />
        {/* APPOINTMENT AND EMAIL VERIFICATION PAGE FOR SIGNER */}
        <Route path="/appointment" element={<AppointmentFunc />} />
        {/* SIGNER CONTACT AND UPLOAD VERIFICATION DOCS PAGE */}
        <Route path="/signer-contact" element={<SignerContactFunc />} />
        {/* NOTARY SERVICE OR PAYMENT PAGE.. IF notary review SUCCESSFUL */}
        <Route path="/notary-service" element={<NotaryServiceFunc />} />
        {/* NOTARY REVIEW DECLINED..IF notary review FAILED. */}
        <Route path="/query" element={<QueryPageFunc />} />
        <Route path="/meeting" element={<MeetingFunc />} />
      </Routes>
    </Router>
  );
}

export default App;