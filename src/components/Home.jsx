import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Welcome To The Nyaynya Youth Week, 2022</h1>
        <h1>Quiz Competition (2nd Round)</h1>
        <button onClick={() => navigate('first')}>Ages 6-10</button>
        <button onClick={() => navigate('second')}>Ages 11-15</button>
        {/* <button onClick={() => navigate('third')}>Ages 16-20</button> */}
    </div>
  )
}

export default Home