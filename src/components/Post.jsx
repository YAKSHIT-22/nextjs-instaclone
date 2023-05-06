import React from 'react'

const Post = ({img,userImg,username,caption,id}) => {
  return (
    
    <div class="my-8 bg-white border">
    <div class="flex items-center justify-between p-4 xs:p-6">
       <img class="h-12 p-1 mr-2 border rounded-full" src={userImg} alt="user"/>
        <p class="flex-1 font-bold">{username}</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
  
   <div class="flex items-center justify-center w-full">
    <img class="object-cover w-full" src={img} alt="nature"/>
   </div>
   <div class="flex items-center justify-between px-4 pt-4 pb-1">
    <div class="flex items-center justify-center gap-2 p-1">
      <div class="flex items-center justify-center p-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="btn" fill="red" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg></div>
      <div class="flex items-center justify-center p-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg></div>
      <div class="flex items-center justify-center p-1 rotate-45">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg></div>
    </div>
    <div class="flex items-center justify-center p-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="btn" fill="black" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    </div>
   </div>
   <div class="flex flex-col items-start justify-center gap-1 p-4 truncate xs:p-6">
  <div class="flex items-center justify-start">
    <span class="mr-2 font-bold truncate">{username}</span>
    <p class="truncate">{caption}</p>
    </div>
  </div>
<div class="px-4 py-2 overflow-y-scroll xs:px-6 max-h-24 scrollbar-none">
   <div class="flex items-center justify-between gap-2 mb-2">
    <img class="object-cover rounded-full h-7" src="https://i.pravatar.cc/150?img=1" alt="avatar"/>
    <p class="font-semibold">kaushi91475</p>
    <p class="flex-1 truncate">Nice!</p>
    <p>2 hours ago</p>
   </div>
  <div class="flex items-center justify-between gap-2 mb-2">
    <img class="object-cover rounded-full h-7" src="https://i.pravatar.cc/150?img=2" alt="avatar"/>
    <p class="font-semibold">jatin3251</p>
    <p class="flex-1 truncate">Amazing!</p>
    <p>5 hours ago</p>
  </div>
  <div class="flex items-center justify-between gap-2 mb-2">
    <img class="object-cover rounded-full h-7" src="https://i.pravatar.cc/150?img=3" alt="avatar"/>
    <p class="font-semibold">karan2245</p>
    <p class="flex-1 truncate">great!</p>
    <p>12 hours ago</p>
  </div>
  <div class="flex items-center justify-between gap-2 mb-2">
    <img class="object-cover rounded-full h-7" src="https://i.pravatar.cc/150?img=4" alt="avatar"/>
    <p class="font-semibold">kanahiya08954</p>
    <p class="flex-1 truncate">good!</p>
    <p>1 day ago</p>
  </div>
</div>

<form class="flex items-center justify-between gap-1 p-4 xs:p-6">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <input class="flex-1 border-none focus:ring-0" type="text" placeholder="Enter your comment" />
  <button class="font-bold lg:flex hidden text-blue-500">Post</button>
  <div class="flex items-center lg:hidden justify-center p-1 rotate-45">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 btn" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg></div>
</form>
</div>
  )
}

export default Post