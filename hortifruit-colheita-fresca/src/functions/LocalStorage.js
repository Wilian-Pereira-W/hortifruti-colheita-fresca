export function addProductLocalStorage(productList, index) {
  const product = {
    genus: productList.genus,
    name: productList.name,
    id: productList.id,
    family: productList.family,
    order: productList.order,
    index,
    nutritions: {
      carbohydrates: productList.nutritions.carbohydrates,
      protein: productList.nutritions.protein,
      fat: productList.nutritions.fat,
      calories: productList.nutritions.calories,
      sugar: productList.nutritions.sugar,
    },
  };

  const products = JSON.parse(localStorage.getItem('productList')) || [];
  localStorage.setItem('productList', JSON.stringify([...products, product]));
}

export function removeProductsLocalStorage(indexProduct) {
  const products = JSON.parse(localStorage.getItem('productList')) || [];
  const filterProducts = products.filter(({ index }) => index !== indexProduct);
  localStorage.setItem('productList', JSON.stringify(filterProducts));
}

export function removeAllProductLocalStorage(idProduct) {
  const products = JSON.parse(localStorage.getItem('productList')) || [];
  const filterProducts = products.filter(({ id }) => id !== idProduct);
  localStorage.setItem('productList', JSON.stringify(filterProducts));
}

export function addProfile(newName, newPassword, newEmail, randomId) {
  const user = {
    name: newName,
    password: newPassword,
    email: newEmail,
    id: randomId,
  };

  const profile = JSON.parse(localStorage.getItem('profile')) || [];
  localStorage.setItem('profile', JSON.stringify([...profile, user]));
}
