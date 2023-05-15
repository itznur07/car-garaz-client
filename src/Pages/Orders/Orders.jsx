import React, { useContext, useEffect, useState } from "react";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import { AuthContext } from "../../Providers/AuthProviders";
import img from "../../assets/images/banner/5.jpg";
import OrderCart from "./OrderCart";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrdersData(data);
      });
  }, []);

  const handleDeletedOrder = (_id) => {
    const proceed = confirm("Are you sure you wanna deleted?");

    if (proceed) {
      fetch(`http://localhost:3000/orders/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Deleted successfully!");
            const remainingData = ordersData.filter((data) => data._id !== _id);
            setOrdersData(remainingData);
          }
        });
    }
  };

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
          <OrderCart
            key={order._id}
            order={order}
            handleDeletedOrder={handleDeletedOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
