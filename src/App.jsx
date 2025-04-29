import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-gray-100 px-4 py-8'>
      <motion.div 
        className='w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8'
        initial={{ scale: 1.1 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-col gap-4 mb-8'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-gray-900'>Welcome to PopX</h1>
          <p className='text-gray-600 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        
        <div className='flex flex-col gap-4'>
          <Link to='/auth/signup' className='w-full'>
            <motion.button 
              className='w-full bg-[#6c25ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8981ff] transition-colors duration-200'
              initial={{ x: 50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              Create Account
            </motion.button>
          </Link>
          
          <Link to='/auth/login' className='w-full'>
            <motion.button 
              className='w-full bg-[#cebafb] px-6 py-3 rounded-lg font-medium hover:bg-[#d2a4fd] transition-colors duration-200'
              initial={{ x: -50, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.7 }}
            >
              Already Registered? Login
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default App;