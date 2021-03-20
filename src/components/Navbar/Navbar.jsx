import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/cartIcon.png';
import useStyles from './styles';
import SearchBar from '../SearchBox /SearchBar';
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems, input, updateInput}) => {
    const classes = useStyles();
    const location = useLocation();

    

    const BarStyling = {width:"20rem",  border:"none", padding:"0.5rem", display: "block", "textAlign": "center",  margin: "auto",
    width: "50%", border: "2px solid black", padding: "10px", top:"10"};
    //border: "3px solid green",
    
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src = { logo } height="25px" className={classes.image} /> E-Cart
                    </Typography>

                    {location.pathname === "/" && (
                    <Typography variant="h6" className={classes.title}>
                        <input inputStyle={{backgroundColor: 'white'}} containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}} 
                        placeholderTextColor={'#g5g5g5'} style={BarStyling} key="random1" value={input} placeholder={"Search Packages"}
                        onChange={(e) => updateInput(e.target.value)}/>
                    </Typography>)}
             
                    <div className={classes.grow}/>
                    {location.pathname === "/" && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>

                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar  
