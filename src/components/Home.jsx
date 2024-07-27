import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
const navigate = useNavigate()
  return (
    <div className='home text-white flex flex-col items-center justify-center h-screen'>
        <h1 className='text-5xl font-bold mb-10'>Welcome To The Nyanya Youth Quiz, 2024</h1>
        <h1 className='text-5xl'>Quiz Competition (1st Round)</h1>
        <div className='flex items-center mt-10'>
        <button className='bg-white text-black px-8 py-3 block text-3xl font-bold rounded-md mx-2' onClick={() => navigate('first')}>Ages 6-10</button>
        <button className='bg-white text-black px-8 py-3 block text-3xl font-bold rounded-md mx-2' onClick={() => navigate('second')}>Ages 11-15</button>
        <button className='bg-white text-black px-8 py-3 block text-3xl font-bold rounded-md mx-2' onClick={() => navigate('third')}>Ages 16-25</button>
        </div>
    </div>
  )
}

export default Home