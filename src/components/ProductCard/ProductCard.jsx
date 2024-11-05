import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
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
    <div className="border-zinc-200 border rounded-lg p-5 bg-white h-fit text-center flex flex-col gap-3">
      <img src={product_image} className="h-32 w-full object-contain" />
      <h2 className="font-semibold">{product_title}</h2>
      <p>
        <span className="text-sky-500">$</span>
        {price}
      </p>
      <div className="mt-3">
        <Link
          to={`/product/${product_id}`}
          className="bg-transparent rounded-full border border-sky-500 text-sm font-semibold px-4 py-2"
          type="button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
