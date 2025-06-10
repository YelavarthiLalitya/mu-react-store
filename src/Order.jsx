import React from 'react'
import { useContext } from 'react'
import App, { AppContext } from './App'


export default function Order() {
    const {orders, email} = useContext(AppContext)
  return (
    <div>
        <h2>My Order</h2>
        {orders.map(order=>(<div key={order.id}>{order.name}-{order.price}-{order.qty}-{order.price * order.qty}</div>))}
    </div>
  )
}
