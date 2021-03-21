import React, { useState, useEffect } from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles'
import { logger } from 'workbox-core/_private';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = ({cart,  handleIncrementPackageCount, handleReducePackageCount, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();
    const isEmpty = (cart.quantity!=null && cart.quantity>0)? false : true;
    let cartItems = []
    let currencySymbol = null;
    logger.debug(cart)
    let netPayable = 0;
    let discount = 0;
    if(cart.quantity!=null && cart.quantity>1) {
        discount = cart.total * 0.1;
        netPayable =  cart.total - discount;
         
    }

    if(cart.cartMap !=null) {
        cartItems = Object.values(cart.cartMap);
    }
    
    logger.debug(cartItems)
    const EmptyCart = () => (
        <Typography variant="subtitle1"> You have no itemes in your shopping cart, 
        <Link className={classes.link} to="/">start adding some</Link>! 
        </Typography>
    );

    

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cartItems.map((entry) => (
                    <Grid item xs={12} sm={4} key={entry.pack.id}>
                        <CartItem item = {entry} onIncrementPackageCount={handleIncrementPackageCount} onReducePackageCount={handleReducePackageCount} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            
             </Grid>



             <div className={classes.cardDetails} >
             <div align="center">
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} gutterBottom> Empty Cart

                    </Button>

            </div>
            

             <div  >
                <Typography variant="h5" align="right" > 
                    Subtotal : {cart.currencySymbol}{cart.total}
                    <br></br>
                    Discount :  {cart.currencySymbol}{discount}
                    <br></br>
                    Net Payable  : <b>{cart.currencySymbol}{netPayable}</b>
                </Typography>
                </div>
                <br></br>

    
             </div>

            
        </>
    );

    if(!cart) return "Loading ..."
    return (
       <Container>
           <div className = {classes.toolbar} />
            <Typography className = {classes.title} variant="h4" gutterBottom>
                Your Shopping Cart
            </Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
           
       </Container>
    )
}

export default Cart
