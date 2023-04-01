import React from 'react'
import Images from '../Images/images'
import TeamsData from '../Data/TeamsData'
import { useParams } from 'react-router-dom'
import PageTransition from '../Components/PageTransition'

const TeamPage = () => {

  const {name} = useParams()

  const searchArray = TeamsData.find(item => item.name == name)

  return (
    <PageTransition>

      <div className=' w-screen grid justify-items-center '>
        <div className='w-9/12 h-auto p-4 bg-amber-900 my-20 grid justify-items-center'>
          <h1 className='section-header text-primary'>Profile</h1>
        
            <img src={searchArray.image} alt="" className="w-11/12 h-[16em] md:w-80 md:h-80" />
          
          <div className='text-primary my-10 text-center'>
            <h1 className='text-2xl my-4'>{searchArray.name}</h1>
            <h1 className='my-4'>{searchArray.title}</h1>

            <h1 className='text-xl mb-4'>Description</h1>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam esse aliquam adipisci eligendi vitae 
              repellat architecto fugit cumque voluptatem suscipit hic nesciunt repudiandae veritatis, quo earum ullam 
              iusto dolorum. Placeat molestiae labore quia animi veniam debitis accusantium. Odio eveniet, cum aliquid 
              nisi ipsa, quisquam nam fuga aperiam distinctio impedit perferendis iure autem modi quaerat fugit facilis, totam quod nulla ad! Inventore voluptatum itaque vero rem eligendi nulla dolores vitae ea, iusto aspernatur cumque! Aperiam, quae. Eius ratione fuga minus esse cum est delectus id aut laudantium aperiam. Excepturi totam natus aliquid quisquam, aperiam officia enim eius iusto est, illo unde ipsam voluptas ducimus aliquam rem, voluptatum saepe exercitationem! Atque eligendi expedita nihil, alias ullam officiis vel animi magnam, aliquid eos asperiores ipsa doloremque aperiam unde, reiciendis maiores ipsum? Perspiciatis laboriosam vitae, tempora consequatur tenetur saepe ratione explicabo, modi beatae delectus quibusdam iste vel! Dignissimos minus quas deleniti tenetur consequatur, necessitatibus blanditiis fugit dolorem iusto odio soluta aliquam. Veritatis cumque alias temporibus aliquid porro animi quidem voluptatibus incidunt unde, consequuntur maiores, quos sunt quaerat, blanditiis dolor earum. Vel illo veniam, ad quae neque accusantium sit. Ipsa dignissimos quam dolor at doloremque maiores accusantium natus nemo ducimus. Explicabo voluptas laboriosam accusantium?
            </article>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default TeamPage