import React from 'react'

const Story = ({img, username, isUser}) => {
  return (
    <div className="flex relative flex-col group items-center justify-center gap-2 cursor-pointer">
            <img className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-in-out" src={img} alt="avatar"/>
            <p className="text-sm text-center truncate w-14">{username}</p>
           {isUser && <div className="absolute flex items-center group-hover:scale-110 justify-center transition-transform duration-200 ease-in-out p-1 text-white top-[12px] right-0 left-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg> 
            </div>}
    </div>
  )
}

export default Story