import React from 'react'

const Newsletter = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-9/12 bg-amber-900 text-primary mx-auto my-10 h-44'>
      <h1 className='section-header text-primary pt-6'>Subscribe to our newsletter</h1>
      <form className='flex justify-center' onSubmit={handleSubmit}>
        <input placeholder='example@gmail.com' className='h-12 w-64 bg-primary border border-amber-900 pl-4 text-amber-900'/>
        <button className='h-12 w-auto p-2 bg-green-700 text-primary focus:border-2 focus:border-green-700 focus:bg-primary focus:text-green-700'>Submit</button>
      </form>
    </div>
  )
}

export default Newsletter