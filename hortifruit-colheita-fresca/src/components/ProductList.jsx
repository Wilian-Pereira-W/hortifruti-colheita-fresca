import React, {
  useContext, useEffect, useState, useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductListContext } from '../context/ProductContext';
import { ContainerProductList, SectionButtonProductList } from '../styles/styles';
import { addProductLocalStorage } from '../functions/LocalStorage';

function ProductList() {
  const { product } = useContext(ProductListContext);
  const [count, setCount] = useState(0);
  const [productLength, setProductLength] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCount(productLength.length);
  }, [productLength]);

  const purchasedFruits = useCallback((purchasedFruit, index) => {
    addProductLocalStorage(purchasedFruit, index);
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLength(JSON.parse(frutiListStorage));
    }
  }, []);

  useEffect(() => {
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLength(JSON.parse(frutiListStorage));
    }
  }, []);

  return (
    <>
      <SectionButtonProductList>
        <button
          type="button"
          onClick={() => navigate('/carrinho')}
        >
          {`Meu carrinho: ${count}`}
        </button>
      </SectionButtonProductList>
      <ContainerProductList>
        {product.map((fruit, index) => (
          <div key={`${fruit.id}`}>
            <h2>{fruit.name}</h2>
            <p>{`Gênero: ${fruit.genus}`}</p>
            <p>{`Família: ${fruit.family}`}</p>
            <p>{`Ordem: ${fruit.order}`}</p>
            <h3>Informações nutricionais</h3>
            <p>{`Carboidratos: ${fruit.nutritions.carbohydrates}`}</p>
            <p>{`Proteína: ${fruit.nutritions.protein}`}</p>
            <p>{`Gordura: ${fruit.nutritions.fat}`}</p>
            <p>{`Calorias: ${fruit.nutritions.calories}`}</p>
            <p>{`Açúcar: ${fruit.nutritions.sugar}`}</p>
            <button
              type="button"
              onClick={() => purchasedFruits(
                fruit,
                index + Math.floor(Math.random() * 100000000000000),
              )}
            >
              Adicionar
            </button>
          </div>
        ))}
      </ContainerProductList>
    </>
  );
}

export default ProductList;
