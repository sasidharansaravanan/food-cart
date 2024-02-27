import React from 'react'
import './product.css';
export const Products = ({product, cart, setCart}) => {
    const addCart = () =>{
        setCart([...cart, product]);
    };
    const removeCart = () =>{
        setCart(cart.filter((c) => c.id !== product.id));
    };
  return (
    <div className='product'>
        <div className="img">
            <img src={product.ftype} alt={product.shop} />
        </div>
        <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart.includes(product)?(
            <button className='btn-remove' onClick={removeCart}>Remove from cart</button>
        ): <button onClick={addCart}>Add To cart</button>

        }
        </div>
        
    </div>
  )
}
