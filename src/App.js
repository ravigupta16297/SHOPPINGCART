import './App.css';
import Cart from './compo/Cart';
import Home from './compo/Home';
import Login from './compo/Login';
import Logout from './compo/Logout';
import Navbar from './compo/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>




    </>
  );
}

export default App;
