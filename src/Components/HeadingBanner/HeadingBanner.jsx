import React from "react";

const HeadingBanner = ({ img, title, caption }) => {
  return (
    <div className='relative mb-9'>
      <img
        src={img}
        alt={title}
        className='w-screen h-64 rounded-md
       '
      />
      <div className='absolute top-24 text-center left-0 right-0 '>
        <h1 className='text-white text-4xl my-4 font-bold'>{title}</h1>
        <p className='bg-[#ff3822] text-white p-2 px-4 inline text-lg '>{caption}</p>
      </div>
    </div>
  );
};

export default HeadingBanner;
