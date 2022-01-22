import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { CardContext } from './ProductContext';
import { addProductLocalStorage, removeProductsLocalStorage, removeAllProductLocalStorage } from '../functions/LocalStorage';

function CartProvider({ children }) {
  const [productLocal, setProductLocal] = useState([]);
  const [nonRepeatedProduct, setNonRepeatedProduct] = useState([]);
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    const produtoUnico = Array.from(productLocal.reduce(
      (map, obj) => map.set(obj.id, obj),
      new Map(),
    ).values());
    setNonRepeatedProduct(produtoUnico);
  }, [productLocal]);

  const quantidade = useCallback((id) => {
    let count = 0;
    productLocal.forEach((product) => {
      if (product.id === id) {
        count += 1;
      }
    });
    return count;
  }, [productLocal]);

  const addProduct = (fruit, productIndex) => {
    addProductLocalStorage(fruit, productIndex);
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLocal(JSON.parse(frutiListStorage));
    }
  };

  const removeProduct = (productIndex) => {
    removeProductsLocalStorage(productIndex);
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLocal(JSON.parse(frutiListStorage));
    }
  };
  const removeAllProduct = (fruit) => {
    removeAllProductLocalStorage(fruit.id);
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLocal(JSON.parse(frutiListStorage));
    }
  };

  const cleanCart = () => {
    localStorage.removeItem('productList');
    setEnable(false);
  };

  useEffect(() => {
    if (productLocal.length === 0) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [productLocal]);

  const context = useMemo(() => ({
    nonRepeatedProduct,
    quantidade,
    setProductLocal,
    addProduct,
    removeProduct,
    removeAllProduct,
    cleanCart,
    enable,
    setEnable,
    productLocal,
  }), [nonRepeatedProduct, enable]);

  return (
    <CardContext.Provider value={context}>
      {children}
    </CardContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
