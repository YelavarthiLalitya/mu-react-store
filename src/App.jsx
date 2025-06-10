import { useState, createContext} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Footer.jsx';
import './Header.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Cart from './Cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register.jsx';
export const AppContext = createContext()
function App() {
  //const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState({});
  return (
    <div>
    <AppContext.Provider value={{users, setUsers, cart, setCart}}>
      <BrowserRouter>
        <Header name="Mu-React-Store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
