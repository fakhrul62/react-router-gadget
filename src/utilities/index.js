import toast from "react-hot-toast";

/////////////////////////////////////////get data from local storage
const getCart = () => {
  const getCartProductsFromLocal = localStorage.getItem("productCart");

  if (getCartProductsFromLocal) {
    const getCartProducts = JSON.parse(getCartProductsFromLocal);
    return getCartProducts;
  } else {
    return [];
  }
};
const getWish = () => {
  const getWishProductsFromLocal = localStorage.getItem("wishlist");
  if (getWishProductsFromLocal) {
    const getWishProducts = JSON.parse(getWishProductsFromLocal);
    return getWishProducts;
  } else {
    return [];
  }
};

//////////////////////////////////////////////////////add to cart
const addToProductsCart = (product) => {
  const addedArray = getCart();
  const isExist = addedArray.find(
    (data) => data.product_id === product.product_id
  );
  if (!isExist) {
    addedArray.push(product);
    localStorage.setItem("productCart", JSON.stringify(addedArray));
    toast.success("Added to Cart!");
} else {
    toast.error("Already added to Cart!");
  }
};
////////////////////////////////////////////////remove from cart


///////////////////////////////////////////add to wishlist
const addToWishList = (product) => {
  const addedArray = getWish();
  const isExist = addedArray.find(
    (data) => data.product_id === product.product_id
  );
  if (!isExist) {
    addedArray.push(product);
    localStorage.setItem("wishlist", JSON.stringify(addedArray));
    toast.success("Added to Wishlist!");
  } else {
    toast.error("Already added to Wishlist!");
  }
};
///////////////////////////////////remove from wishlist



export { addToProductsCart, addToWishList, getCart, getWish };
