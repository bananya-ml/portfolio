import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ananya Bhatnagar, nice to see you.</p>
            </div>
            <div>
              <p>I'm a passionate individual working on integration of electronics, astronomy and machine learning,
              building inspired models that improve quality of life. I specialize in data analysis 
              for deep learning models, especially scientific Big Data. I am currently looking to
              apply these skills in the industry, please look around to find out more!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
