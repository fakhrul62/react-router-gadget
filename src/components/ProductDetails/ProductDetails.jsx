import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SecondaryHeader from "../Header/SecondaryHeader";
import { Rating } from "@smastrom/react-rating";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import "@smastrom/react-rating/style.css";
import { addToProductsCart, addToWishList, getWish } from "../../utilities";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const prod_id_string = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const prod_id = parseInt(prod_id_string.product_id);
  const products = useLoaderData();
  const product = products?.find((product) => product.product_id === prod_id);

  const {
    product_id,
    category_id,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product || {};

  useEffect(() => {
    const wishlist = getWish();
    const isExist = wishlist.find((data) => data.product_id === product_id);
    if (isExist) {
      setIsWishlisted(false);
    }
  }, []);

  const handleCart = () => {
    addToProductsCart(product);
  };
  const handleWish = () => {
    addToWishList(product);
    setIsWishlisted(true);
  };
  return (
    <div>
      <Toaster />
      <Helmet>
        <title>{product_title}</title>
      </Helmet>
      <SecondaryHeader></SecondaryHeader>
      <div className="mx-auto bg-sky-500 py-2">
        <div className="w-11/12 mx-auto mb-52">
          <div className="w-10/12 mx-auto mt-5">
            <h1 className="text-center text-white font-semibold text-2xl leading-snug">
              Product Details
            </h1>
            <p className="text-center w-9/12 mx-auto text-white mt-3">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="w-8/12 -mt-44 mx-auto border-2 border-zinc-200 bg-white  p-10 rounded-xl mb-16 grid grid-cols-3">
        <div className="flex items-center">
          <img className="h-52 object-contain" src={product_image} />
        </div>
        <div className="col-span-2">
          <h2 className="font-bold text-xl mb-3">{product_title}</h2>
          <h3 className="font-medium my-2 text-lg">Price: ${price}</h3>
          <span>
            {availability === true ? (
              <span className="bg-sky-200 text-sky-600 px-3 py-1 rounded-full border border-sky-800 text-sm">
                In Stock
              </span>
            ) : (
              <span className="bg-red-200 text-red-600 px-3 py-1 rounded-full border border-red-800 text-sm">
                Out of Stock
              </span>
            )}
          </span>
          <p className="text-sm text-zinc-500 my-3">{description}</p>
          <h4 className="font-semibold">Specifications:</h4>
          <p className="text-zinc-500 text-sm">{Specification}</p>
          <h4 className="font-semibold mt-3">Rating:</h4>
          <div className="flex items-center gap-3">
            <Rating
              style={{ maxWidth: 100 }}
              value={rating}
              halfFillMode
              readOnly
            />{" "}
            <span className="bg-zinc-300 px-3 py-1 rounded-full text-sm">
              {rating}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={handleCart}
              className="flex items-center font-semibold px-4 bg-sky-500 text-white gap-2 py-2 rounded-full"
            >
              Add to Cart <IoCartOutline />
            </button>
            <button
              disabled={isWishlisted}
              onClick={handleWish}
              type="button"
              className="flex items-center font-semibold px-2 text-lg bg-white text-sky-500 border border-sky-500  gap-2 py-2 rounded-full"
            >
              <IoHeartOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
