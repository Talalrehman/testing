import React from 'react'
import Man from "../Images/talal1.jpg"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import{AiOutlineTwitter} from "react-icons/ai"
import Talal from "../Images/Talal Rehman.pdf"
import "./Home.css"
export default function Home() {

   
  return (
    <div>
        
<div class="w-full max-w-sm bg-taransparent rounded-lg     ml-[36%] mt-[3%]">
    <div class="flex justify-end px-4 pt-4">
        
        {/* <!-- Dropdown menu --> */}
        
    </div>
    <div class="flex flex-col items-center pb-10 h-[15%] ">
        <img class="mb-3 w-52 h-38 rounded-full shadow-lg" src={Man} alt=""/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white text-4xl mt-[3%]">Talal Rehamn</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 mt-[2%] text-2xl">React Js Developer</span>
        <div className=' h-[8%] w-[50%]  flex justify-around text-3xl text-white mt-[5%] hi'>
       <div   className='hi1'>
        <a href="https://www.instagram.com/imtalalrehman/?hl=en"><AiFillInstagram/></a>
        </div>
       <div className='hi2'>
        <a href="https://www.facebook.com/lilmax.roman"><AiFillFacebook/></a></div>
       <div className='hi3'>
        <a href="https://twitter.com/home"><AiOutlineTwitter/></a>
        </div>

        
        </div>
        
        <div class="flex mt-4 space-x-3 md:mt-6">
        
            <a href={Talal} download class="inline-flex items-center h-[8%] w-[100%] py-2 px-4 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download Cv</a>
            {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
        </div>
    </div>
</div>

    </div>
  )
}
