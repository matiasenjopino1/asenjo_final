import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import './App.css'
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/products" element={<Products></Products>} />
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
