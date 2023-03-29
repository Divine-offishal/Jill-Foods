import React from 'react'

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className=' mt-8' onSubmit={handleSubmit}>
        <span className="grid justify-items-center">
          <label htmlFor="card-number" className='text-xl font-semibold'>Card Number</label>
          <input type="number" name="card-number" placeholder='xxxx xxxx xxxx xxxx' className=' max-input'/>

        </span>
        
        <div className="flex justify-center my-6 md:ml-0 ml-12">
          <span className='lg:mr-64 flex flex-col'>
            <label htmlFor="exp-date" className='text-xl font-semibold'>Expiry Date</label>
            <input type='text' name="exp-date" placeholder='00/00' className='  text-amber-900 h-10  md:w-11/12 w-5/12 border border-amber-900 bg-primary pl-4'/>
          </span>
          <span className='flex flex-col lg:ml-20'>
            <label htmlFor="cvv" className='text-xl font-semibold'>CVV</label>
            <input type="number" name="cvv" placeholder='000' className=' text-amber-900 h-10  md:w-8/12 w-4/12 border border-amber-900 bg-primary pl-4'/>
          </span>
        </div>

        <div className="grid justify-items-center">
          <label htmlFor="card-name" className='text-xl font-semibold'>Card Name</label>
          <input type="text" name="card-name" placeholder='Andrew Ojo' className=' max-input'/>
        </div>

        <div className="grid justify-items-center mt-4">
          <label htmlFor="email" className='text-xl font-semibold'>Email</label>
          <input type="email" name="email" placeholder='andrew@gmail.com' className=' max-input'/>
        </div>

        <div className='grid justify-items-center mt-10'>
          <button type="submit" className='text-primary h-10 md:w-7/12 w-9/12 focus:border-4 focus:border-green-700 focus:bg-primary focus:text-green-700 bg-green-700 pl-4'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form