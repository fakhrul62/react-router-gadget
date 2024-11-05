import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products_data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filterByCategory = [...products_data].filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    } else {
      setProducts(products_data.slice(0, 6));
    }
  }, [products_data, category]);

  return (
    <>
      <div className="col-span-4 grid grid-cols-3 gap-5">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center col-span-5">
        {products.length < 10 && (
          <button
            onClick={() => setProducts(products_data)}
            type="button"
            className="btn bg-sky-500 text-white"
          >
            View All
          </button>
        )}
      </div>
    </>
  );
};

export default Products;
