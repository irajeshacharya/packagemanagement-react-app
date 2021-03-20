import React , { useState, useEffect } from 'react'
import { Packages, Navbar, Cart } from './components'
import { async } from 'q';
import axios from 'axios'
import { logger } from 'workbox-core/_private';
import SearchBar from './components/SearchBox /SearchBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const api = axios.create({})

const App = () => {
    const [packages, setPackages] = useState([]);
    const [packagesDefault, setPackagesDefault] = useState([]);
    const[cart, setCart] = useState({});
    const [input, setInput] = useState([]);

    const fetchPackages = async () => {
        let data = null
        await api.get('http://localhost:8080/api/v1/packages', {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })
          .then(response => {
              data = response.data;
          })

        setPackages(data);
        setPackagesDefault(data);
    }

    const fetchCart = async () => {
        let data = null
        await api.get('http://localhost:8080/api/v1/cart', {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })


        setCart(data);
        
    }


    const handleAddToCart = async(packageId, quantity) => {
        let data = null
        await api.post('http://localhost:8080/api/v1/cart/addToCart', 
        {
            "packageId" : packageId,
            "quantity" : quantity
        }, 
        {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })
        setCart(data);
    }

    const handleRemoveFromCart = async(packageId) => {
        let data = null
        await api.delete('http://localhost:8080/api/v1/cart/removeFromCart/'+packageId, 
        {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })
        setCart(data);
    }

    const handleIncrementPackageCount = async(packageId) => {
        let data = null
        let url = 'http://localhost:8080/api/v1/cart/incrementPackageCount/'+packageId;
        await api.put(url, 
            {
            }, 
        {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })
        setCart(data);
    }

    const handleReducePackageCount = async(packageId) => {
        let data = null
        await api.put('http://localhost:8080/api/v1/cart/reducePackageCount/'+packageId, 
        {
        }, 
        {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })
        setCart(data);
    }

    const handleEmptyCart = async(packageId) => {
        let data = null
        await api.delete('http://localhost:8080/api/v1/cart/emptyCart', 
        {
            headers: {
                'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
                'Access-Control-Allow-Origin' : '*',
                'Content-type': 'Application/json',
                'Accept': 'application/json'
              }
          })         
          .then(response => {
            data = response.data;
        })
        setCart(data);
    }


    const updateInput = async (input) => {
        const filtered = packagesDefault.filter(pack => {
         return pack.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setPackages(filtered);
     }

    useEffect(() => {
        fetchPackages();
        fetchCart();
    }, []);


    return (
        <Router>
            <div>
                <Navbar totalItems = {cart.quantity} input={input} updateInput={updateInput}/>
                <Switch>
                    <Route exact path="/">
                        <Packages packages = {packages} onAddToCart={handleAddToCart}/> 
                    </Route>

                    <Route exact path="/cart">
                        <Cart 
                            cart={cart} 
                            handleIncrementPackageCount ={handleIncrementPackageCount} 
                            handleReducePackageCount ={handleReducePackageCount} 
                            handleRemoveFromCart={handleRemoveFromCart} 
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                    {/* <SearchBar input={input} onChange={ e => updateInput(e.target)}/> */}
                    
                </Switch>
            </div>
        </Router>
    )
}

export default App
