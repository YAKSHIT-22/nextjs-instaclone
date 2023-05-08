"use client"
import { signIn } from "next-auth/react";
import Header from "../../components/Header"
export default function signin() {
  return (
    <>
      <Header/>
      <div className="flex justify-center space-x-7 mt-20">
          <img className="hidden object-cover rotate-6 md:inline-flex md:w-48"  src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png" alt="instagram-image" />
          <div className="">
              
                  <div className="flex flex-col items-center">
                      <img className="w-32 object-cover"  src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png" alt="" />
                      <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
                      <button onClick={()=> signIn('google', {callbackUrl: "/"})}  className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with Google</button>
                  </div>
             
          </div>
      </div>
    </>
  );
}
