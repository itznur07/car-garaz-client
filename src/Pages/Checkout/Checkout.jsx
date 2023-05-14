import React from "react";
import { useLoaderData } from "react-router-dom";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import img from "../../assets/images/banner/4.jpg";

const Checkout = () => {
  const checkoutData = useLoaderData();

  console.log(checkoutData);

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
        // onSubmit={handleAddCoffe}
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
              id='price'
              name='price'
              type='text'
              defaultValue={`$${checkoutData.price}`}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              name='phone'
              type='text'
              placeholder='Phone Number'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              placeholder='Enter Email'
              required
            />
          </div>
        </div>
        <div className='mb-4'>
          <textarea
            className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            name='photo'
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
