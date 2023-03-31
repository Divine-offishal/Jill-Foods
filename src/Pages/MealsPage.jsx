import React from 'react'
import Images from '../Images/images'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import LoadSkeleton from '../Components/LoadSkeleton'

const MealsPage = () => {

  const {name} = useParams()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`https://themealdb.com/api/json/v1/1/filter.php?c=${name}`, fetcher)

  return (
    <div className=' w-screen '>
      <div className='mt-20 grid justify-items-center md:grid-cols-4'>

        {data?.meals.map((meal, i) => (
            <Card name={meal.strMeal} image={meal.strMealThumb} key={i} save={true}/>
        ))}
        {
          isLoading && <LoadSkeleton/>
        }
      </div>
    </div>
  )
}

export default MealsPage