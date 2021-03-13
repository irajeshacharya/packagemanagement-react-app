import React from 'react';
import { Grid } from '@material-ui/core'

import Pack from './Pack/Pack'

const packages = [
    {
        "id": 1,
        "name": "Dasara",
        "description": "Dasara Special Package",
        "products": [
            {
                "id": 1,
                "name": "Shirt",
                "description": "Black Shirt",
                "price": 50,
                "base": "USD"
            },
            {
                "id": 3,
                "name": "TShirt",
                "description": "Black TShirt",
                "price": 75,
                "base": "USD"
            }
        ],
        "price": 125,
        "base": "USD"
    },
    {
        "id": 2,
        "name": "Deepavali",
        "description": "Deepavali Special Package",
        "products": [
            {
                "id": 1,
                "name": "Shirt",
                "description": "Black Shirt",
                "price": 50,
                "base": "USD"
            },
            {
                "id": 2,
                "name": "Pant",
                "description": "Black Pant",
                "price": 100,
                "base": "USD"
            },
            {
                "id": 3,
                "name": "TShirt",
                "description": "Black TShirt",
                "price": 75,
                "base": "USD"
            }
        ],
        "price": 225,
        "base": "USD"
    }
]

const Packages = () => {
    return(
    <main>
        <Grid container justify="center" spacing={4}>
            {packages.map((pack) => (
                    <Grid item key={pack.id} xs={12} sm={6} md={4} lg={3}>
                        <Pack pack={pack}/>
                    </Grid> 
                
                    ))}
        </Grid>
    </main>)
}             

export default Packages;