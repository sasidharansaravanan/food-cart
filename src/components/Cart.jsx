import React, { useEffect, useState } from 'react'
import "./cart.css";

export const Cart = ({cart, setCart}) => {
    const[total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.amt),0))
    },{cart})
  return (
   <>
    <div className='cart-container'>
        <h1 className='Cart-heading'>Cart Produts</h1>
        {
            cart.map((product)=>(
                <div className="cart-product" key={product.id}>
            <div className="img">
                <img src={product.ftype} alt="image" />
            </div>
            <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
            </div>
        </div>
            ))
        }
    </div>
    <h2 className='Cart-amt'>Total Amount Rs: {total} </h2>
    </>
  )
}
