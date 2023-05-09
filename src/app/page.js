import Feed from '@/components/Feed'
import Header from '@/components/Header'
import UploadModal from '@/components/UploadModal'
import React from 'react'


const Home = async() => {
  
  return (
    <div className="bg-gray-50 min-h-screen h-full">
    <Header/>
    <Feed/>
    <UploadModal/>
    </div>
  )
}

export default Home