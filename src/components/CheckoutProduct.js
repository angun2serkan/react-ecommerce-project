import React from 'react';
import classes from './CheckoutProduct.module.css';


function CheckoutProduct(props) {
  return (
    <div className={classes.checkoutProduct}>
        <img src="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg" className={classes.checkout__image}/>

        <div className={classes.checkoutProduct__info}>
            <p className={classes.checkoutProduct__title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ea!
            </p>

            <p className={classes.checkoutProduct__price}>
                <small>$</small>
                <strong>20</strong>
            </p>

            <div className={classes.checkoutProduct__rating}>
                ⭐⭐
            </div>

            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct