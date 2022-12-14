import React from 'react'
import classes from './Subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";

function Subtotal() {

    const [{basket}, dispatch] = useStateValue();
  return (
    <div className={classes.subtotal}>
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length}): <strong>${value}</strong>
                </p>  
                <small className={classes.subtotal__gift}>
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

            
        
        />
    </div>
  )
}

export default Subtotal