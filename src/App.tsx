import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './paths/Home';
import Custom from './paths/Custom';
import Cart from './paths/Cart';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { ProductCard } from './types';

function App() {
  const [cart, setCart] = useState<ProductCard[]>([]);

  const [cartCount, setCartCount] = useState<number>(0);

  // Calculate cart count
  useEffect(() => {
    const count = cart.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
    setCartCount(count);
  }, [cart]);

  return (
    <div className='App'>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path='/custom'
          element={<Custom cart={cart} setCart={setCart} />}
        />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
