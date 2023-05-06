import React from 'react'

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between  mt-14">
             <div className="flex items-center justify-center"><img
                src="https://avatars.githubusercontent.com/u/92084737?v=4"
                alt="user-image"
                className="h-14 rounded-full border p-[2px]"
              />
              <div className="ml-4">
                <h2 className="font-bold">yakshit.g2203</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
              </div></div>
              <button className="text-sm font-semibold text-blue-400">
                Sign out
              </button>
            </div>
  
  )
}

export default MiniProfile