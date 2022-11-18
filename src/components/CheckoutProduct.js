import React from 'react';
import {useStateValue} from "../StateProvider";
import classes from './CheckoutProduct.module.css';


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className={classes.checkoutProduct}>
            <img src={image} alt="" className={classes.checkoutProduct__image} />

            <div className={classes.checkoutProduct__info}>
                <p className={classes.checkoutProduct__title}>{title}
                </p>
                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.checkoutProduct__rating}>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct