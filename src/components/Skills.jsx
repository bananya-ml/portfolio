import React from 'react';

import TensorFlow from '../assets/tensorflow.png';
import JavaScript from '../assets/javascript.png';
import Bash from '../assets/bash.png';
import FastAPI from '../assets/fastapi.png';
import Python from '../assets/python.png';
import TypeScript from '../assets/typescript.png';
import LangChain from '../assets/langchain.png';
import HugginFace from '../assets/huggingface.svg';
import Vite from '../assets/vite.js.png';
import ReactImg from '../assets/react.png';
import Docker from '../assets/docker.png';
import Git from '../assets/git.png';
import PyTorch from '../assets/pytorch.png';
import GoogleCloud from '../assets/googlecloud.png';
import AmazonWebServices from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
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
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FastAPI} alt="HTML icon" />
                  <p className='my-4'>FastAPI</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={LangChain} alt="tensorflow" />
                  <p className='my-4'>LangChain</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HugginFace} alt="tensorflow" />
                  <p className='my-4'>HuggingFace</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Vite} alt="HTML icon" />
                  <p className='my-4'>Vite</p>
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
                  <img className='w-20 mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-4'>TypeScript</p>
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
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4'>Git</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bash} alt="HTML icon" />
                  <p className='my-4'>Bash</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
