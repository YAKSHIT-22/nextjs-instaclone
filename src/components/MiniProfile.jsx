import React from 'react'
import { useSession,signOut } from 'next-auth/react'
const MiniProfile = () => {
  const {data:session} = useSession();
  return (
    <div className="flex items-center justify-between gap-4 mt-14">
             <div className="flex items-center justify-center"><img
                src={session?.user.image}
                alt="user-image"
                className="h-14 rounded-full border p-[2px]"
              />
              <div className="ml-4">
                <h2 className="font-bold">{session?.user.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
              </div></div>
              <button onClick={()=>signOut()} className="text-sm font-semibold text-blue-400">
                Sign out
              </button>
            </div>
  
  )
}

export default MiniProfile