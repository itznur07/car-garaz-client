import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetch(
      `https://car-doctor-server-two-eta.vercel.app/services?sort=${
        asc ? "asc" : "dasc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setServices(data);
        }
      });
  }, [asc]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredServices = services.filter((service) =>
    service?.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='mx-14 my-14'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-[#ff3811] mb-2'>Services</h2>
        <h3 className='text-5xl font-bold  mb-4'>Our Service Area</h3>
        <p className='max-w-3xl mx-auto text-gray-500 mb-2'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <button
          onClick={() => setAsc(!asc)}
          className='my-5 border border-red-500 p-2'
        >
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>

        <input
          type='text'
          name='search'
          className='border border-red-600 p-2 mx-5'
          placeholder='Search Services'
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredServices?.map((service) => (
          <div
            key={service.id}
            className='bg-white rounded-lg shadow-md overflow-hidden'
          >
            <div className='relative'>
              <img
                src={service.img}
                alt={service.title}
                className='w-full h-64 object-cover object-center'
              />
            </div>
            <div className='px-4 py-6'>
              <div>
                <h4 className='text-2xl font-bold'>{service.title}</h4>
              </div>
              <div className='flex justify-between my-5'>
                <span className='text-xl font-bold text-[#ff3811]'>
                  Price: {service.price}
                </span>
                <Link to={`/checkout/${service._id}`}>
                  <FaArrowRight className='h-6 w-6 text-[#ff3811]' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-12'>
        <button className='border border-[#ff3811] text-[#ff3811] px-6 py-3 rounded-md  transition-all duration-300 font-bold'>
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
