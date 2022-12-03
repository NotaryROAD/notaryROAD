import React, { useState } from 'react'
import mainLogo from'./final_logo.svg';
import {ethers} from 'ethers'
import NumberChanger from '../artifacts/contracts/NumberChanger.sol/NumberChanger.json'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../stylesheet/UserType.css'
import {Link} from 'react-router-dom'
import Mcp from "mcp.js";
const NumberChangerAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512" // address received when deploying the smart contract script...
const mcp = new Mcp();

mcp.Contract.setProvider("https://test-huygens.computecoin.info/");

const core = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // contract address

const Contract = new mcp.Contract(NumberChanger.abi, core);
const UserType = () => {

  const [num, setNum] = useState(0);

// Query


// Transaction
// Contract.methods.xxx().sendToBlock({
//     from: account,
//     amount: "0"
// })
// .then(res => {
//     if(!res) {
//         throw new Error("Transaction Failed.")
//     } else {
//         const hash = res.msg;   // blockHash
//     } 
// })
  // async function getNumber() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const contract = new ethers.Contract(NumberChangerAddress, NumberChanger.abi, provider)
  //     try {
  //       const data = await contract.getNumber()
  //       // setNum(data)
  //       console.log('data: ', data)
  //     } catch (err) {
  //       console.log('Error: ', err)
  //     }
  //   }
  // }

  // async function setNumber(value) {
  //   if (!value) return;
  //   if (!typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(NumberChangerAddress, NumberChanger.abi, signer)
  //     const transaction = await contract.setNumber(value)
  //     await transaction.wait()
  //     getNumber()
  //   }
  // }
  // async function requestAccount() {
  //   await window.ethereum.request({ method: 'eth_requestAccounts' })
  // }
  // async function handleClick(event){
  //   event.preventDefault()
    // await setNumber(num + 1)
//     Contract.methods.getNumber().call()
// .then(res => {
//     console.log(res.toString());
// })
//   }
//   async function handleClick2(event){
//     event.preventDefault()
    // await getNumber()
  
  return (
    <>
    <img src={mainLogo} style={{width: 200}}/>
    <div>
    <div className='header'>Let's get started!</div>
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