import React from "react";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const ordersData = useLoaderData();
  console.log("====================================");
  console.log(ordersData);
  console.log("====================================");

  return <div>Orders</div>;
};

export default Orders;
