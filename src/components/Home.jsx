import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import BackgroundWrapper from './Backgroundwrapper';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ananya Bhatnagar
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm an Astrophysics Postgraduate.
        </h2>
        <p className='text-xl text-pink-600 py-4 font-bold max-w-[700px] shadow'>
          I’m a postgradute student specializing in research (and occasionally
          building) new methods of integrations between astronomy and machine learning. 
          Currently, I’m working towards gaining a full fledged MLOps skill-set.
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}> 
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
