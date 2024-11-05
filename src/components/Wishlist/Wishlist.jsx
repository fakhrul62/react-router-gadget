import React, { useEffect, useState } from "react";
import { getWish } from "../../utilities";
import WishlistCard from "./WishlistCard";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const getWishData = getWish();
  const [newWish, setNewWish] = useState(getWishData);
  const products = getWishData.map((data) => data);

  const handleDelete = (product) => {
    const newNewWish = getWishData.filter(
      (data) => data.product_id !== product.product_id
    );
    localStorage.setItem("wishlist", JSON.stringify(newNewWish));
    setNewWish(newNewWish);
  };
  return (
    <div>
      <Helmet>
        <title>Wishlist | Dashboard</title>
      </Helmet>
      <div>
        <h2 className="font-bold text-xl">Wishlist</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10">
        {products.map((product) => (
          <WishlistCard
            key={product.product_id}
            handleDelete={handleDelete}
            product={product}
          ></WishlistCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
