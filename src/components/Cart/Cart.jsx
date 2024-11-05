import React, { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { getCart } from "../../utilities";
import { BiSortAlt2 } from "react-icons/bi";
import CartCard from "./CartCard";
import { PiSealCheckDuotone } from "react-icons/pi";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [cost, setCost] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const getCartData = getCart();
  const [newCartData, setNewCartData] = useState(getCartData);
  const products = getCartData.map((data) => data);
  useEffect(() => {
    const prices = products.map((product) => product.price);
    const newCost = prices.reduce((acc, curr) => acc + curr, 0);
    setCost(newCost);
  }, []);
  const handleSorting = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    // const sortedFloat = sorted.toFixed(2);
    setNewCartData(sorted);
  };
  const handlePurchase = () => {
    if (cost > 0) {
      setOpenModal(true);
    }
  };
  const handleClose = () => {
    setOpenModal(false);
    setCost(0);
    localStorage.setItem("productCart", []);
    setNewCartData([]);
  };
  const handleDelete = (product) => {
    const newNewCart = getCartData.filter(
      (data) => data.product_id !== product.product_id
    );
    localStorage.setItem("productCart", JSON.stringify(newNewCart));
    const newCost = cost - product.price;
    setCost(newCost);
    setNewCartData(newNewCart);
  };
  return (
    <div>
      <Helmet>
        <title>Cart | Dashboard</title>
      </Helmet>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Cart</h2>
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">Total Cost: ${cost}</span>
          <button
            onClick={handleSorting}
            type="button"
            className="border border-sky-500 rounded-full font-semibold px-5 text-sm py-2 text-sky-500 flex items-center gap-1"
          >
            Sort by Price
            <BiSortAlt2 />
          </button>
          <button
            onClick={handlePurchase}
            type="button"
            className="border border-sky-500 bg-sky-500 rounded-full font-semibold px-5 text-sm py-2 text-white flex items-center gap-1"
          >
            Purchase
          </button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body className="">
              <div className="space-y-6 max-w-xl">
                <div className="flex justify-center *:text-emerald-600 text-7xl">
                  <PiSealCheckDuotone />
                </div>
                <h2 className="text-center font-bold ">Payment Successful!</h2>
                <p className="text-base leading-relaxed text-gray-500 text-center">
                  Thank you for Purchasing.
                </p>
                <p className="text-gray-500 text-center !mt-2">
                  Total Cost: ${cost}
                </p>
              </div>
              <div className="flex">
                <Button
                  className="w-full mt-4 bg-sky-500"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10">
        {newCartData.map((product) => (
          <CartCard
            key={product.product_id}
            handleDelete={handleDelete}
            product={product}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
