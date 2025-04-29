import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MyContext from '../context/UserContext';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(MyContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    agency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({
      ...prev,
      [name]: value
    }));

    setUserData({
      name: inputValue.name,
      email: inputValue.email,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    setIsDisabled(!Object.values(inputValue).every(value => value !== ''));
  }, [inputValue]);

  return (
    <div className='flex justify-center items-center min-h-screen w-full bg-sky-50 px-4 py-8'>
      <motion.div 
        className='w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8'
        initial={{ scale: 1.1 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-2xl sm:text-3xl font-semibold mb-6'>Create your PopX account</h1>
        
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            type="text"
            name='name'
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400'
            placeholder='Full Name'
            value={inputValue.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name='phoneNumber'
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400'
            placeholder='Phone number'
            value={inputValue.phoneNumber}
            onChange={handleChange}
            required
          />
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
          <input
            type="text"
            name='companyName'
            className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-400'
            placeholder='Company name'
            value={inputValue.companyName}
            onChange={handleChange}
            required
          />
          
          <div className='px-4 py-3'>
            <p className='mb-3 text-gray-700'>Are you an agency?</p>
            <div className='flex gap-6'>
              <label className='flex items-center gap-2'>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label className='flex items-center gap-2'>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className={`${
              isDisabled ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium py-3 rounded-lg transition-colors duration-200 mt-4`}
            disabled={isDisabled}
          >
            Create Account
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUpPage;