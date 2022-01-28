import PropTypes from 'prop-types';
import React, { useState, useEffect, useMemo } from 'react';
import { ProductListContext } from './ProductContext';
import apiHortiFruti from '../services/apiRequest';

function ProductListProvider({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    apiHortiFruti
      .get('/all')
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro ${err}`);
      });
  }, []);

  const context = useMemo(() => ({
    product,
  }), [product]);

  return (
    <ProductListContext.Provider value={context}>
      {children}
    </ProductListContext.Provider>
  );
}

ProductListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductListProvider;
