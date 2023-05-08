'use client'
import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import { useSession } from 'next-auth/react'
const Feed = () => {
  const {data: session} = useSession();
  return (
    <main className={`grid px-2 ${session ? "grid-cols-1 lg:grid-cols-3 gap-4 md:max-w-7xl mx-auto": "grid-cols-1 lg:grid-cols-2 gap-4 md:max-w-3xl mx-auto"}  `}>
      <section className="lg:col-span-2">
          <Stories/>
         
          <Posts/>
      </section>
      <section className="hidden lg:inline-grid lg:col-span-1">
          <div className="fixed">
           <MiniProfile/>
           
  
            <Suggestions/>
          </div>
      </section>
    </main>
  )
}

export default Feed