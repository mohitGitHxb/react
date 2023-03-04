// import logo from './logo.svg';
import { Fragment , useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  }
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={()=>{
      setCartIsShown(false);
    }}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
