import React from "react";
import { RxCross1 } from "react-icons/rx";

const CartCard = ({ product, handleDelete }) => {
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
  return (
    <div className="bg-white p-5 rounded-xl border grid grid-cols-5 gap-5">
      <img className="h-32 object-contain" src={product_image} />
      <div className="col-span-3 flex flex-col justify-between">
        <h2 className="font-semibold text-xl">{product_title}</h2>
        <p className="text-sm text-zinc-500 my-3">{description}</p>
        <h3 className="font-medium my-2">Price: ${price}</h3>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => handleDelete(product)}
          className="p-3 bg-red-200 rounded-full *:text-red-600"
        >
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
