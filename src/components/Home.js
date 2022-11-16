import React from 'react';
import classes from './Home.module.css';
import Product from './Product.js';


function Home() {
  return (
    <div>
        <div className={classes.home}>
            <div className={classes.home__container}>
                <img src='https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg' alt='' className={classes.home__image}/>
                <div className={classes.home__row}>
                  <Product/>
                  <Product/>
                </div>

                <div className={classes.home__row}>
                  <Product/>
                  <Product/>
                  <Product/>
                </div>

                <div className={classes.home__row}>
                  <Product/>
                  <Product/>
                  <Product/>
                </div>

                <div className={classes.home__row}>
                  <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home