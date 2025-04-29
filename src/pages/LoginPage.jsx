import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    setIsDisabled(!inputValue.email || !inputValue.password);
  }, [inputValue]);

  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-sky-50 px-4 py-8'>
      <motion.div 
        className='w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8'
        initial={{ scale: 1.1 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <div className='mb-8'>
          <h1 className='text-2xl sm:text-3xl font-semibold mb-3'>Sign in to your PopX account</h1>
          <p className='text-sm sm:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium voluptas tempore.</p>
        </div>
        
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            type="email"
            name='email'
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400'
            placeholder='Enter email address'
            value={inputValue.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name='password'
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400'
            placeholder='Enter password'
            value={inputValue.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className={`${
              isDisabled ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium py-3 rounded-lg transition-colors duration-200 mt-4`}
            disabled={isDisabled}
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;