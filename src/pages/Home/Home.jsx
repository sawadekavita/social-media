import React from 'react'
import Posts from '../../components/Posts/Posts'
import Stories from '../../components/Stories/Stories'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
    <Stories />
    <Posts />

    </div>
  )
}

export default Home