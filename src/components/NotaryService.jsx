import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import mainLogo from'./final_logo.svg';
import '../stylesheet/NotaryService.css'
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import Button from '@mui/material/Button';

const NotaryService = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0)
  const onToken = (token) => {
    console.log(token)
    console.log(token.card.brand)
    navigate('/meeting');
        }

  const handleClick = (cost) => {
    setPrice(cost)
  }
  return (
    <>
    <div className="flex-div">
    <div>
    <h1> Select Notary Service </h1>
    <p> Remote Online Notary Session -  Free</p>
    <div onClick={() => handleClick(0)}><Button variant="text"><FaRegPlusSquare size="25px"/></Button></div>
    <p> Mobile Notary Session - $25</p>
    <div onClick={() => handleClick(25)}><Button variant="text"><FaRegPlusSquare size="25px"/></Button></div>
    <p>Apostille Document Service - State Level 1 - Free</p>
    <div onClick={() => handleClick(0)}><Button variant="text"><FaRegPlusSquare size="25px"/></Button></div>
    <p> Apostille Document Service - Federal Level 2 - Free</p>
    <div onClick={() => handleClick(0)}><Button variant="text"><FaRegPlusSquare size="25px"/></Button></div>
    <p> Notary Acknowledgement Certificate - Free </p>
    <div onClick={() => handleClick(0)}><Button variant="text"><FaRegPlusSquare size="25px"/></Button></div>
    </div>
    <div className="flex-div2">
    <p style={{marginRight: 30}}> ${price} USD</p>
    {/* <Link to='/payment'><Button variant="contained">Pay</Button></Link> */}
    <StripeCheckout
token={onToken}
name="Stripe Checkout"
currency='USD'
amount={100*price}
stripeKey="pk_test_51MAGxxSIuW15DNDtVuPySlmGV7N4brYn6Z0PXC6XyUNILSl4FiCa0tcCctXH8ftSWj5wAyvFmxzIHnUArhssoGpv00oKOy3f6R"
/>
    </div>
    </div>
    </>
  )
}

export default NotaryService
