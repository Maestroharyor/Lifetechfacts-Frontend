import type { NextPage } from 'next'
import DefaultLayout from '../components/Layouts/DefaultLayout'


const Community: NextPage = () => {
  return (
    <>
      <DefaultLayout title='Have a question or enquiry?' desc='The best tech/coding mentorship program for you'>
        <p className='text-3xl text-red-500'>Contact</p>
      </DefaultLayout>
      </>
    
  )
}

export default Community
