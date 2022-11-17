import React from 'react'
import classes from './Checkout.module.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img src="https://www.mastercard.com/news/assets/metadata-images/default-social-image.png" className={classes.checkout__ad}/>

        <div>
          <h2 className={classes.checkout__title}>
            Your Shopping Basket
          </h2>
          <CheckoutProduct/>
          <CheckoutProduct/>
        </div>
      </div>

      <div className={classes.checkout__right}>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout