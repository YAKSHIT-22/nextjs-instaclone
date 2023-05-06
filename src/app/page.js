import Feed from '@/components/Feed'
import Header from '@/components/Header'
import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen h-full">
    <Header/>
    <Feed/>
    </div>
  )
}

export default Home