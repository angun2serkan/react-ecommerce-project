import React from 'react';
import classes from './Product.module.css';

function Product() {
  return (
    <div>
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut nihil fugit velit obcaecati nisi quae voluptas eius provident alias, tenetur consectetur, omnis repellat incidunt?</p>
                <p className={classes.product__price}>
                  <small></small>
                  <strong></strong>
                </p>
                <div className={classes.product__rating}>⭐⭐⭐</div>
            </div>

            <img src="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg" alt="product-image" />

            <button>Add to Basket</button>
            
        </div>
    </div>
  )
}

export default Product