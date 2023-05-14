import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import { AuthContext } from "../../Providers/AuthProviders";
import img from "../../assets/images/banner/4.jpg";

const Checkout = () => {
  const checkoutData = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const amount = form.amount.value;
    const date = form.date.value;
    const email = form.email.value;
    const message = form.message.value;

    const oderInfo = {
      name,
      amount,
      date,
      email,
      message,
    };

    fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order confirm added successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className='flex flex-col space-y-5 items-center md:mx-24 h-auto'>
      {/* <div>
        <h1 className='text-3xl font-bold my-2 uppercase text-blue-500'>
          Add New Coffee
        </h1>
      </div> */}
      <HeadingBanner
        img={img}
        title='Checkout'
        caption='Home / Checkout'
      ></HeadingBanner>
      <form
        onSubmit={handleOrderSubmit}
        className='bg-white rounded  max-w-5xl '
      >
        <div className='grid grid-cols-2 gap-5'>
          <div className='mb-2'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              Service Name
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              defaultValue={checkoutData.title}
              required
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor='amount'
              className='block text-gray-700 font-bold mb-2'
            >
              Amount
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='amount'
              name='amount'
              type='text'
              defaultValue={`$${checkoutData.price}`}
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='date'
              className='block text-gray-700 font-bold mb-2'
            >
              Date
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='date'
              name='date'
              type='date'
              required
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Email
            </label>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              defaultValue={user?.email}
              required
            />
          </div>
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-gray-700 font-bold mb-2'
          >
            Message
          </label>
          <textarea
            className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            name='message'
            rows={6}
            type='text'
            placeholder='Your message...'
            required
          />
        </div>
        {/* Submit button */}
        <div className='flex items-center justify-between '>
          <button
            className='bg-[#ff3811] hover:bg-[#ff3800] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Order confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
