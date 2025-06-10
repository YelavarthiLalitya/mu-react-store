import React from 'react'
import { AppContext } from './App'
import { useContext } from 'react'

export default function Cart() {
    const {cart} = useContext(AppContext)
    const increment = () =>{
        alert("Increment")
        setCart({...cart,qty:cart.qty+1})
    };
    const decrement = () =>{
        alert("Decrement")
        setCart({...cart,qty:cart.qty-1})
    };
  return (
    <div>
        <h2>My cart</h2>
        <h3>{cart.name}</h3>
        <p>{cart.desc}</p>
        <h3>{cart.price}</h3>
        <p>
            <button onClick={decrement}>-</button>
            {cart.qty}
            <button onClick={increment}>+</button>
        </p>
        <hr />
        <h2>Order Value:{cart.price * cart.qty}</h2>
        
    </div>
  )
}
