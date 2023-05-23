import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import { AuthContext } from "../../Providers/AuthProviders";
import img from "../../assets/images/banner/5.jpg";
import OrderCart from "./OrderCart";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [ordersData, setOrdersData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://car-doctor-server-two-eta.vercel.app/orders?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("car-access-token")} `,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setOrdersData(data);
        } else {
          logOut();
          navigate("/");
        }
      });
  }, []);

  const handleDeletedOrder = (_id) => {
    const proceed = confirm("Are you sure you wanna deleted?");

    if (proceed) {
      fetch(`https://car-doctor-server-two-eta.vercel.app/orders/${_id}`, {
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

  const handleUpdateOrder = (_id) => {
    fetch(`https://car-doctor-server-two-eta.vercel.app/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Accept" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Accepted successfully!");
          location.reload();
        }
      });
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
            handleUpdateOrder={handleUpdateOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
