import React from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({item, onIncrementPackageCount, onReducePackageCount, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardMedia className={classes.media} image={item.pack.imageUrl} title={item.pack.name} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4"> {item.pack.name}</Typography>
                    <Typography variant="h5"> {item.pack.currencySymbol}{item.pack.price}</Typography>
                </CardContent>
                <CardActions className={classes.CardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small" onClick={() => onReducePackageCount(item.pack.id)}>-</Button>
                        <Typography> {item.quantity}</Typography>
                        <Button type="button" size="small" onClick={() => onIncrementPackageCount(item.pack.id)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.pack.id)}> Remove </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
