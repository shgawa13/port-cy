import React from 'react';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
  return (
    <div className="footer bg-[#171717]">
      <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4">
        <h1 className="text-3xl">© Tyler</h1>
        <div className="flex gap-4 cursor-pointer">
          <a href="https://twitter.com/tyleraustinw" target="_blank">
            <i className="fa-brands fa-twitter border-[2px] border-b p-2 rounded-[100%] hover:bg-white  hover:text-black"></i>
          </a>
          <a href="https://www.instagram.com/tyleraustinwilliams" target="_blank">
            <i className="fa-brands fa-instagram border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>
          <a href="https://github.com/cybector" target="_blank">
            <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
          </a>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Footer;
