"use client"
import React, { useEffect } from 'react'
import minifaker from 'minifaker';
import "minifaker/locales/en"
import Story from './Story';



const Stories = () => {
    const [storyUsers, setStoryUsers] = React.useState([]);
    useEffect(() => {
        const storyUsers = minifaker.array(20,(i)=>({
            username:minifaker.username({locale:"en"}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id:i,
        }))
        setStoryUsers(storyUsers)
    },[]);
  return (
    <div className="flex items-center bg-white mt-8 justify-start gap-2 px-4 py-8 overflow-x-scroll border rounded scrollbar-none" id="stories">
        <div className="relative flex flex-col items-center justify-center gap-2 cursor-pointer group">
            <img className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-in-out" src="https://avatars.githubusercontent.com/u/92084737?v=4" alt="avatar"/>
            <div className="absolute flex items-center justify-center p-1 text-white top-[12px] right-0 left-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg> 
            </div>
            <p className="text-sm text-center truncate w-14">yakshit.g2203</p>
          </div>
        {
            storyUsers.map((user)=>(
                <Story key={user.id} username={user.username} img={user.img} />
            ))
        }
    </div>
  )
}

export default Stories