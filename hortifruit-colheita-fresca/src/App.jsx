import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './pages/ ShoppingCart';
import Product from './pages/Product';
import Login from './pages/Login';
import GlobalStyle from './styles/global';
import NotFound from './pages/NotFound';
import CardRegister from './components/CardRegister';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Product />} />
        <Route path="/carrinho" element={<ShoppingCart />} />
        <Route path="/cadastrar" element={<CardRegister />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
