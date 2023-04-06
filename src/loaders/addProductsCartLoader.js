import { getStoredCart } from "../utilities/fakedb";

export const addedProductsCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //   get card
  const savedCart = getStoredCart();
  const initialCard = [];
  //   console.log("savedCart", savedCart);
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    // console.log(id, addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      //   console.log(id, quantity);
      addedProduct.quantity = quantity;
      initialCard.push(addedProduct);
    }
  }

  return { products, initialCard };
};


/* import { getStoredCart } from "../utilities/fakedb";

export const addProductsCartLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const savedCart = getStoredCart();
  const previousCard = [];
  for (const id in products) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      previousCard.push(addedProduct);
    }
  }
  return { products, previousCard };
}; */
