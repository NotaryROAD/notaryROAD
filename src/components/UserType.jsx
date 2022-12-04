import React, { useState } from 'react'
import mainLogo from'./notary.svg';
import {ethers} from 'ethers'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Typewriter from "typewriter-effect";
import '../stylesheet/UserType.css'
import {Link} from 'react-router-dom'
import Mcp from "mcp.js";
const NumberChangerAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512" // address received when deploying the smart contract script...
const mcp = new Mcp();

mcp.Contract.setProvider("https://test-huygens.computecoin.info/");

const core = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // contract address

// const Contract = new mcp.Contract(NumberChanger.abi, core);
const UserType = () => {
  let accounts;
const enableEth = async () => {
accounts = await window.ethereum.request({
method: 'eth_requestAccounts'
}).catch((err) => {
  console.log(err.code)
})
console.log(accounts)
}
// const sendTransaction = async () => {
//   let params = [
//     {
//       from: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
//       to: accounts[0],
//       value: Number(1000000000).toString(16)
//     }
//   ]
//   let result = await window.ethereum.request({method: 'eth_sendTransaction', params}).catch(
//     (err) => {console.log(err.code)}
//   )
//   console.log(result)
// }

  return (
    <>
      {/* <span className="holder">
 <span className="holder-content">
 Let's get started!
 </span>
</span> */}
      <img src={mainLogo} style={{position: "absolute", top:2, left: 2, width: 200}} />
    <div>
      {/* <button onClick={enableEth}>ENABLE</button> */}
      {/* <button onClick={sendTransaction}>ENABLE send</button> */}
    <div className='header'>

    <Typewriter
  options={{
    strings: [`Let's get started!`],
    autoStart: true,
    loop: true,
    delay: 80,
    pauseFor: 1000
  }}
/>
      </div>
      
    <Link to='/appointment'><div className='btn-1'>SIGNER</div></Link>
    <Link to='/notary'><div className='btn-2'>NOTARY</div></Link>
    <div className='footer'>
    <div id="text">
    <span className='bold'>R</span>emote <span className='bold'>O</span>nline <span className='bold'>A</span>nd <span className='bold'>D</span>ecentralized Notary Sessions
    </div>
    </div>
    </div> 
    </> 
  )

  }
export default UserType