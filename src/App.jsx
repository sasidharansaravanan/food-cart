import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Head} from './components/Head';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { useState } from 'react';

function App() {
  const[cart, setCart] = useState([]);
  return (
    <>
    <BrowserRouter>
    <Head cart={cart}/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
