import React from 'react';
import classes from './Product.module.css';

function Product(props) {
  return (
    <div>
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>{props.title}</p>
                <p className={classes.product__price}>
                  <small>$</small>
                  <strong>{props.price}</strong>
                </p>
                <div className={classes.product__rating}>
                  {Array(props.rating)
                  .fill()
                  .map((_, i) => (
                    <p>⭐</p>
                  ))}
                </div>
            </div>

            <img src={props.image} alt="product-image" />

            <button>Add to Basket</button>
            
        </div>
    </div>
  )
}

export default Product