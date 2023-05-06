import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div
      class="sticky top-0 z-20 flex items-center justify-center bg-white border-b shadow-sm"
    >
      <div
        class="flex flex-row items-center justify-between w-full h-full gap-2 p-2 my-2 sm:p-4 md:max-w-6xl lg:max-w-7xl sm:mx-2 xs:mx-4 md:mx-4"
      >
        <div class="flex items-center justify-center w-full p-2 cursor-pointer">
          <Image
            width={96}
            height={48}
            class="w-20 h-10 sm:w-24 sm:h-12"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="logo"
          />
        </div>

        <div class="relative flex items-center justify-center w-full gap-2">
          <div
            class="absolute top-0 bottom-0 flex items-center justify-center h-full left-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="flex items-center justify-center w-full h-full p-4 pl-8 text-sm border-gray-500 rounded sm:pl-10 focus:ring-black focus:border-black bg-gray-50"
            placeholder="Search..."
          />
        </div>

        <div class="flex items-center justify-center w-full gap-4 p-2">
          <div class="items-center justify-center hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 transition-transform duration-200 ease-in-out cursor-pointer hover:scale-125"
            >
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
              />
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
              />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mt-[1px] cursor-pointer hover:scale-125 transition-transform duration-200 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex items-center justify-center">
            <Image
              width={32}
              height={32}
              class="h-8 object-cover rounded-full cursor-pointer"
              src="https://avatars.githubusercontent.com/u/92084737?s=40&v=4"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header