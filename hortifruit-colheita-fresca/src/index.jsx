import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductListProvider from './context/ProductListProvider';
import CartProvider from './context/CartProvider';

ReactDOM.render(
  <ProductListProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductListProvider>,
  document.getElementById('root'),
);
