import React from 'react'

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-9/12 bg-amber-900 text-yellow-200 mx-auto my-10 h-44'>
      <h1 className='section-header text-yellow-200 pt-6'>Subscribe to our newsletter</h1>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <input placeholder='example@gmail.com' className='h-12 w-64 bg-yellow-200 border border-amber-900 pl-4 text-amber-900'/>
        <button className='h-12 w-auto p-2 bg-green-700 text-yellow-200 focus:border-2 focus:border-green-700 focus:bg-yellow-200 focus:text-green-700'>Submit</button>
      </form>
    </div>
  )
}

export default Newsletter