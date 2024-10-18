import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0, 10));
  }, [])

  return (
    <div className="my-10">
      <div className="text-3xl text-center py-8">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Upgrade Your Wardrobe with Our Latest Collection!
        </p>
      </div>

      {/* Rendering Product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProducts.map((item)=> (
                <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} /> 
            ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
