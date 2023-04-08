import React, { useEffect } from 'react'
import Card from './Card'
import useSWR from 'swr'
import { NavLink } from 'react-router-dom'
import LoadSkeleton from './LoadSkeleton'
import toast, {Toaster} from 'react-hot-toast'

const Meals = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json()).then(res => console.log(res))
  const { data, error, isLoading } = useSWR('https://themealdb.com/api/json/v1/1/categories.php', fetcher)


  return (
    <>
      <Toaster 
        position='top-center'
        duration='300'/>
      <h1 className='section-header'>Our Meals</h1>
      <div className='grid justify-items-center'>
        <div className="flex mx-auto">
          <input type="text" name="" className='border border-amber-900 focus:border-2 focus:border-amber-900 h-10 w-44 bg-primary  text-amber-900' placeholder='Search for a meal'/>
          <button className='h-10 w-auto p-2 text-primary bg-green-700 cursor-pointer focus:bg-primary focus:text-amber-900 focus:border-2 focus:border-green-700'>Search</button>
        </div>
      </div>
      <div className=''>
        {isLoading ? (
              <LoadSkeleton />
            ) : error ? (
              toast.error(error.message),
              <h1 className='text-center text-amber-900 font-semibold text-xl mt-4'>Sorry cannot fetch meals</h1>
            ) : (
              <div className='grid lg:grid-cols-4 md:grid-cols-3 items-center justify-items-center'>
                {data?.categories.map((category, i) => (
                  <NavLink to={`/meals/${category.strCategory}`} key={i}>
                    <Card image={category.strCategoryThumb} name={category.strCategory} save={false}/>
                  </NavLink>
                ))}
              </div>
            )}
      </div>
    </>
  )
}

export default Meals