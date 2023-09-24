import React from 'react';

const BookTest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions with the form data
  };

  return (
    <div className='relative rigth-[-100%]'>
      <form onSubmit={handleSubmit} className='p-4 bg-white shadow-md rounded-md'>
        <input
          type='text'
          placeholder='Patient Name'
          className='block w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500'
          required
        />
        <label htmlFor='mobile' className='block mb-2 font-medium'>
          Mobile Number:
          <input
            type='tel'
            id='mobile'
            placeholder='Enter Mobile Number'
            className='block w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500'
            required
          />
        </label>
        <label htmlFor='gender' className='block mb-2 font-medium'>
          Gender:
          <select
            name='gender'
            id='gender'
            className='block w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500'
            required
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </label>
        <label htmlFor='preferredDate' className='block mb-2 font-medium'>
          Preferred Date:
          <input
            type='date'
            id='preferredDate'
            name='preferredDate'
            className='block w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500'
            required
          />
        </label>
        <button
          type='submit'
          className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookTest;
