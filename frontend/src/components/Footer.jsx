import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Your trusted source for quality products, delivered with care. Shop
            with confidence and discover the best deals today! Connecting you
            with the latest trends and timeless essentials. Join our community
            of satisfied shoppers and enjoy exclusive offers!
          </p>
        </div>
        
        <div className="">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91 8308341531</li>
                <li>contact@forever.com </li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className="text-sm text-center py-5">Copyright 2024@ forever.com - All Rights Reserved.</p>
        </div>

    </div>
  );
};

export default Footer;
