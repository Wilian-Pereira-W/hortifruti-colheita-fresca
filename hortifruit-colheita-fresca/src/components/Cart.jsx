import React, { useContext, useEffect } from 'react';
import { BsEmojiFrown } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../context/ProductContext';
import { ConteinerCart, SectionAmount, SectionButton } from '../styles/styles';

function Cart() {
  const {
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
  } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    const frutiListStorage = localStorage.getItem('productList');
    if (frutiListStorage) {
      setProductLocal(JSON.parse(frutiListStorage));
    }
  }, [setProductLocal]);

  const handleClick = (value, productIndex, fruit) => {
    if (value === '+') {
      addProduct(fruit, productIndex);
    } else if (value === '-') {
      removeProduct(productIndex);
    } else if (value === 'clear') {
      cleanCart();
    } else {
      removeAllProduct(fruit);
    }
  };
  const navigateToHome = (value) => {
    if (value === 'Finalizar') {
      global.alert('Compra realizada com sucesso!');
      navigate('/produto');
      cleanCart();
      setEnable(false);
    }
    navigate('/produto');
    setEnable(false);
  };
  return (
    <ConteinerCart>
      {enable ? (
        <SectionButton>
          <button
            type="button"
            value="comprar"
            onClick={() => navigateToHome()}
          >
            CONTINUAR COMPRANDO
          </button>
          <button
            type="button"
            value="clear"
            onClick={({ target }) => handleClick(target.value)}
          >
            REMOVER TODOS OS PRODUTOS
          </button>
          <button
            type="button"
            value="Finalizar"
            onClick={({ target }) => navigateToHome(target.value)}
          >
            FINALIZAR O PEDIDO
          </button>
          <button
            type="button"
            value="total"
          >
            {`Total de produtos no carrinho: ${productLocal.length}`}
          </button>
        </SectionButton>
      ) : (
        <SectionButton>
          <button
            type="button"
            value="continuar"
            onClick={() => navigateToHome()}
          >
            CONTINUAR COMPRANDO
          </button>
        </SectionButton>
      )}

      {enable ? nonRepeatedProduct.map((fruit) => (
        <div key={`${fruit.id}`}>
          <h2>{fruit.name}</h2>
          <p>{`Gênero: ${fruit.genus}`}</p>
          <p>{`Família: ${fruit.family}`}</p>
          <p>{`Ordem: ${fruit.order}`}</p>
          <SectionAmount>
            {quantidade(fruit.id) === 1 ? (
              <button
                type="button"
                value="delete"
                onClick={() => handleClick('', '', fruit)}
              >
                <MdDelete
                  size={40}
                />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  value="delete"
                  onClick={() => handleClick('', '', fruit)}
                >
                  <MdDelete
                    size={40}
                  />
                </button>
                <button
                  type="button"
                  value="-"
                  onClick={({ target }) => handleClick(target.value, fruit.index)}
                >
                  -
                </button>
              </>
            )}
            <span>{quantidade(fruit.id)}</span>
            <button
              type="button"
              value="+"
              onClick={({ target }) => handleClick(
                target.value,
                Math.floor(Math.random() * 100000000000000),
                fruit,
              )}
            >
              +
            </button>
          </SectionAmount>
        </div>
      )) : (
        <div>
          <BsEmojiFrown size={50} />
          <p>Seu carrinho está vazio</p>
        </div>
      )}
    </ConteinerCart>
  );
}

export default Cart;
