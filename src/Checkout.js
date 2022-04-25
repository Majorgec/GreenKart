import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt=''>

        </img>
        <div>
          <h2 className='checkout__title' >Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

      </div>

      <div className='checkout__right'>
        <Subtotal />


      </div>
    </div>
  )
}

export default Checkout