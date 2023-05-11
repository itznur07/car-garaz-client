import React from "react";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-8'>
      <div className='md:mx-14'>
        <footer className='mt-5'>
          <div className='container mx-auto '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div>
                <img src="/logo.svg" className="w-20" alt="" />
                <ul>
                  <li className='mb-2'>
                    <a href='# '>Help &amp; FAQs</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Order Tracking</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Shipping &amp; Delivery</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Orders History</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Advanced Search</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Login</a>
                  </li>
                </ul>
              </div>

              {/* ABOUT US */}
              <div>
                <h4 className='text-md font-bold mb-4'>ABOUT US</h4>
                <ul>
                  <li className='mb-2'>
                    <a href='# '>Help &amp; FAQs</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Order Tracking</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Shipping &amp; Delivery</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Orders History</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Advanced Search</a>
                  </li>
                </ul>
              </div>

              {/* MORE INFORMATION */}
              <div>
                <h4 className='text-md font-bold mb-4'>MORE INFORMATION</h4>
                <ul>
                  <li className='mb-2'>
                    <a href='# '>Affiliates</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Refer a Friend</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Student Beans Offers</a>
                  </li>
                  <li className='mb-2'>
                    <a href='# '>Gift Vouchers</a>
                  </li>
                </ul>
              </div>

              {/* SOCIAL MEDIA */}
              <div>
                <h1 className='text-md font-bold mb-4'>SOCIAL MEDIA</h1>
                <div className='flex space-x-4'>
                  <a href='# '>
                    <FaFacebook className='text-xl text-gray-600 hover:text-blue-500' />
                  </a>
                  <a href='# '>
                    <FaInstagram className='text-xl text-gray-600 hover:text-pink-500' />
                  </a>
                  <a href='# '>
                    <FaTwitter className='text-xl text-gray-600 hover:text-blue-400' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='container mx-auto flex flex-wrap justify-between items-center mt-4'>
          <div className='text-center md:text-left'>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <p>
              Built with <FaHeart className='inline text-red-500' /> by itznur07
            </p>
          </div>
          <div className='text-center md:text-right mt-4 md:mt-0'>
            <ul className='flex justify-center md:justify-end'>
              <li className='mx-3'>
                <a href='# ' className='hover:text-black'>
                  Terms
                </a>
              </li>
              <li className='mx-3'>
                <a href='# ' className='hover:text-black'>
                  Privacy
                </a>
              </li>
              <li className='mx-3'>
                <a href='# ' className='hover:text-black'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
