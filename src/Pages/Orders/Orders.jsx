import React from "react";
import { useLoaderData } from "react-router-dom";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import img from "../../assets/images/banner/5.jpg";
import OrderCart from "./OrderCart";

const Orders = () => {
  const ordersData = useLoaderData();
  console.log("====================================");
  console.log(ordersData);
  console.log("====================================");

  return (
    <div className='md:mx-24'>
      <HeadingBanner
        img={img}
        title='Orders'
        caption='Home / Orders'
      ></HeadingBanner>
      {/* Orders cart list */}
      <div>
        {ordersData?.map((order) => (
          <OrderCart key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
