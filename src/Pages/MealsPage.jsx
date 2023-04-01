import React, { useEffect } from 'react'
import Images from '../Images/images'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import LoadSkeleton from '../Components/LoadSkeleton'
import { toast } from 'react-hot-toast'
import PageTransition from '../Components/PageTransition'
import { useSelector } from 'react-redux'

const MealsPage = () => {

  const {name} = useParams()
  const SavedArray = useSelector((state) => state.saveItem.saveContainer)

  // Fetching the meals from the API with useSWR
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`https://themealdb.com/api/json/v1/1/filter.php?c=${name}`, fetcher)

  // Checks if the array is empty and then saves it in the local storage
  useEffect(() => {
    if (SavedArray.length > 0) {
      localStorage.setItem('savedItem', JSON.stringify(SavedArray))
    }
  }, [SavedArray])

  return (
    <PageTransition>
      <div className=' w-screen '>
        <div className='mt-20 grid justify-items-center md:grid-cols-4'>

          {isLoading? (<LoadSkeleton/>) :
          error ? (toast.error(error.message)):
            (data?.meals.map((meal, i) => (
                <Card name={`${meal.strMeal.substring(0, 15)}...`} image={meal.strMealThumb} key={i} save={true} payload={meal}/>
            )))
          }
          {
            isLoading && <LoadSkeleton/>
          }

          
        </div>
      </div>
    </PageTransition>
  )
}

export default MealsPage