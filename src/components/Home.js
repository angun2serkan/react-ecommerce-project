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
                  <Product 
                  id="15345856556"
                  title=", as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lo"
                  price={11.96}
                  rating={5}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                  <Product
                  id="0403196"
                  title="from a Lorem Ipsum passage, and going through the cites of the word in classical"
                  price={23}
                  rating={4}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                </div>

                <div className={classes.home__row}>
                <Product
                  id="0403196"
                  title="from a Lorem Ipsum passage, and going through the cites of the word in classical"
                  price={23}
                  rating={4}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                  <Product 
                  id="15345856556"
                  title=", as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lo"
                  price={11.96}
                  rating={5}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                  <Product 
                  id="15345856556"
                  title=", as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lo"
                  price={11.96}
                  rating={5}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                </div>

                <div className={classes.home__row}>
                <Product 
                  id="15345856556"
                  title=", as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lo"
                  price={11.96}
                  rating={5}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                  <Product
                  id="0403196"
                  title="from a Lorem Ipsum passage, and going through the cites of the word in classical"
                  price={23}
                  rating={4}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                  <Product
                  id="0403196"
                  title="from a Lorem Ipsum passage, and going through the cites of the word in classical"
                  price={23}
                  rating={4}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                </div>

                <div className={classes.home__row}>
                <Product
                  id="0403196"
                  title="from a Lorem Ipsum passage, and going through the cites of the word in classical"
                  price={23}
                  rating={4}
                  image="https://i.pinimg.com/originals/9b/07/a9/9b07a9902e0a62b91c80adfc0e50eb68.jpg"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home