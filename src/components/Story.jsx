import React from 'react'

const Story = ({img, username}) => {
  return (
    <div class="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <img class="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-in-out" src={img} alt="avatar"/>
            <p class="text-sm text-center truncate w-14">{username}</p>
    </div>
  )
}

export default Story