import React from 'react';

import TensorFlow from '../assets/tensorflow.png';
import CSS from '../assets/css.png';
import PostGres from '../assets/postgres.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Docker from '../assets/docker.png';
import GitHub from '../assets/github.png';
import PyTorch from '../assets/pytorch.png';
import GoogleCloud from '../assets/googlecloud.png';
import AmazonWebServices from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={TensorFlow} alt="tensorflow" />
                  <p className='my-4'>TensorFlow Extended</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PyTorch} alt="tensorflow" />
                  <p className='my-4'>PyTorch</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GitHub</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>Node JS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GoogleCloud} alt="HTML icon" />
                  <p className='my-4'>Google Cloud</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AmazonWebServices} alt="HTML icon" />
                  <p className='my-4'>Amazon Web Services</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PostGres} alt="HTML icon" />
                  <p className='my-4'>PostGres</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
