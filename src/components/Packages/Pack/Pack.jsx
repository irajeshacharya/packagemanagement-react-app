import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart, ContactSupport} from '@material-ui/icons'

import useStyles from './styles'

const Pack = ({pack, onAddToCart}) => {
    const classes = useStyles();
    console.log(pack)
    const handleAddToCart = () => onAddToCart(pack.id, 1);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={pack.imageUrl} title={pack.name} />
            {/* <CardMedia  className={classes.media} component="img" square image={pack.imageUrl} title={pack.name} /> */}
            <CardContent>
                <Typography variant='h4' align="center">
                        <b>{pack.name}</b>
                </Typography>
                <Typography variant='h6' color="textSecondary" align="center">
                        {pack.description}
                </Typography>
                <Typography variant='h6' align="right">
                        <b>{pack.currencySymbol}{pack.price}</b> 
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(pack.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default Pack;
