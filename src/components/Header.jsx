import React from 'react';
import logo from '../assets/images/astronout.png';
import logo1 from '../assets/images/astronout1.png';
import bg from '../assets/images/bg.jpg';
import '../styles.css';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <div
        id='home'
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9)), url(${bg})`,
        }}
        className='bg bg-center bg-cover bg-no-repeat h-screen flex flex-col'
      >
        <Navbar />
        <div className='wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6'>
          <div className='content lg:text-cebte'>
            <div className='py-4'>
              <a href='#Projects'>
                <button className='border-2 border-[#fff] font-bold font-weight-600 text-white bg-[linear-gradient(90deg,#f35848,#f35848)] p-4 rounded-2xl'>
                  Welcome to my Portfolio
                </button>
              </a>
            </div>
            <div>
              <h1 className='text-white text-5xl font-extrabold' style={{ fontSize: '3rem' }}>
                Hi! I'm Tyler{' '}
              </h1>
              <p className='text-white py-4 max-w-xl font-extrabold' style={{ fontSize: '20px' }}>
                FrontEnd Developer | Photographer | Graphic designer{' '}
              </p>
            </div>
            <div>
              <button className='text-white text-2xl'>
                Let's Connect <i className='fa-solid fa-arrow-right text-lg p-[2px]'></i>
              </button>
            </div>
          </div>
          <div className='image banner-astronout lg:hidden absolute w-[300px] flex'>
            <img className='w-96 ast-img' src={logo1} alt='' />
          </div>
          <div className='image banner-astronout1 lg:hidden absolute w-[300px] flex'>
            <img className='w-96 ast-img' src={logo} alt='' />
          </div>
        </div>
      </div>

      <div id='Projects'>
        {/* This is the element that the button will scroll to when clicked */}
      </div>

      {/* Add this CSS to the <head> section of your HTML file or to a global CSS file */}
     
    </>
  );
}

export default Header;
