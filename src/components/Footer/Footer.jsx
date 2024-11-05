import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-center font-bold text-3xl">React Router Gadget</h2>
      <p className="text-center text-zinc-700 my-3">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className=" my-10" />
      <div className="grid grid-cols-3 w-7/12 mx-auto gap-5">
        <div className="text-center">
          <h3 className="font-bold mb-2">Services</h3>
          <p className="text-sm text-zinc-700">Product Support</p>
          <p className="text-sm text-zinc-700">Order Trackin</p>
          <p className="text-sm text-zinc-700">Shipping & Delivery</p>
          <p className="text-sm text-zinc-700">Returns</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Company</h3>
          <p className="text-sm text-zinc-700">About Us</p>
          <p className="text-sm text-zinc-700">Careers</p>
          <p className="text-sm text-zinc-700">Contact</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Legal</h3>
          <p className="text-sm text-zinc-700">Terms of Service</p>
          <p className="text-sm text-zinc-700">Privacy Policy</p>
          <p className="text-sm text-zinc-700">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
