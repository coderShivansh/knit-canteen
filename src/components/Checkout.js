import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';


export default function Checkout({subtotal}) {

  const orderstate = useSelector((state)=> state.placeOrderReducer)
  const {loading , error , success }=orderstate

    const dispatch=useDispatch()
    function tokenHander(token){

               
               console.log(token);
               dispatch(placeOrder(token , subtotal))
               
    }

  return (
    <div>
        
        {loading && (<Loading/>)}
        {error && (<Error error='Something went Wrong'/>)}
        {success && (<Success success='Your Order Placed Successfully'/>)}

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51OsOrpK7Hva1CZ81Pj2sML8CIff2kv26epbJcDkkqVXQ10psS4RMTj77wsfwGuJw9TjqWGNZbY6OgoyHTDxQy2wc00cKAGFH8x'
        currency='INR'
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
