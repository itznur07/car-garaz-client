import React from "react";
import { FaTrash } from "react-icons/fa";

const OrderCart = ({ order }) => {
  const { img, servicesName, name, amount, date, status } = order;

  return (
    <div className='flex items-center justify-between p-4 my-5 bg-white rounded-md shadow-md sm:mx-auto sm:w-11/12 lg:w-10/12'>
      <div className='flex items-center space-x-4'>
        <img
          className='w-24 h-24 object-cover rounded-md'
          src={img}
          alt={name}
        />
        <div>
          <h4 className='font-medium text-gray-800'>{servicesName}</h4>
          <p className='text-sm text-gray-600'>{amount}</p>
          <p className='text-sm text-gray-600'>{date}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <button
          className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
            status === "Pending" ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          {status}
        </button>
        <button className='ml-4 text-gray-600 hover:text-red-500'>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default OrderCart;
