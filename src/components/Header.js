import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header}>
        <div className={classes.header__logo}>
            <StorefrontIcon className={classes.header__logoImage} fontSize="large"/>
            <h2 className={classes.header__logoTitle}>eShop</h2>
        </div>
      
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon}/>
      </div>

      <div className={classes.header__nav}>
        <div className={classes.nav__item}>
          <span className={classes.nav__itemLineOne}>Hello Guest</span>
          <span className={classes.nav__itemLineTwo}>Sign In</span>
        </div>

        <div className={classes.nav__item}>
          <span className={classes.nav__itemLineOne}>Your</span>
          <span className={classes.nav__itemLineTwo}>Shop</span>
        </div>
        
        <div className="nav__item">
          <ShoppingBasketIcon className={classes.nav__itemBasket} font-size="large"/>
          <span className={`${classes.nav__itemLineTwo} ${classes.nav__basketCount}`}>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header