import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const images = [img1, img2, img3, img4];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='relative h-screen mx-14 rounded-md'>
      {images.map((imageUrl, index) => (
        <div>
          <img
            key={imageUrl}
            className={`absolute bottom-0 left-0 ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            src={imageUrl}
            alt={`Banner ${index + 1}`}
          />
          <div className='absolute inset-0 bg-black opacity-20'></div>
        </div>
      ))}
      <div
        className='absolute bottom-72 left-20 w-full  
       p-6 text-white'
      >
        <h2 className='text-5xl font-bold'>
          Affordable <br /> Price For Car <br /> Servicing
        </h2>
        <p className='my-5'>
          There are many variations of passages of available, <br /> but the
          majority have suffered alteration in some form
        </p>
        <div className='mt-5'>
          <button className='bg-[#FF3811] text-white-800 font-bold rounded px-4 py-2 mr-4'>
            Discover more
          </button>
          <button className='border border-white text-white font-bold rounded px-4 py-2'>
            Latest project
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 mb-6 mr-6 flex items-center'>
        <button
          className='bg-gray-800 text-white rounded-full p-2 mr-2 focus:outline-none'
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>
        {images.map((imageUrl, index) => (
          <button
            key={imageUrl}
            className={`w-3 h-3 rounded-full bg-gray-500 mx-2 focus:outline-none ${
              activeIndex === index ? "bg-white" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        <button
          className='bg-[#FF3811] text-white rounded-full p-2 ml-2 focus:outline-none'
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
