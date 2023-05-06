import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className={`flex relative p-2 w-full ${true ? "md:max-w-7xl gap-2 mx-auto" : "gap-2  md:max-w-4xl mx-auto"}  `}>
      <section className="p-2 w-full lg:w-[65%] xl:w-[70%]">
         
          <Stories/>
         
          <Posts/>
      </section>
      <section className="hidden p-2 items-start justify-center relative lg:flex w-full  xl:w-[30%] lg:w-[35%]">
          <div className="fixed">
           <MiniProfile/>
           
  
            <Suggestions/>
          </div>
      </section>
    </main>
  )
}

export default Feed