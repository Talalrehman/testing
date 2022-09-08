import React from 'react'
// import Img1 from "../src/Components/Images/one.jpg"
import Img2 from "../src/Components/Images/two.png"
import {AiOutlineHome} from "react-icons/ai"
import {AiFillContacts} from "react-icons/ai"
import {GrNotes} from "react-icons/gr"
import {SiCountingworkspro} from "react-icons/si"
import {ImBlogger2} from "react-icons/im"
import { Link } from 'react-router-dom'
// import { Disclosure } from '@headlessui/react'
// import {MenuIcon,XIcon} from "heroicons/react/outline"

export default function Navbar() {
  return (
    
  
<nav className=" px-2 sm:px-7 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-around  items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <img src={Img2}className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4  rounded-lg border bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       <Link to="/">
        <li>
          <a href="/#" className=" block py-1 pr-4 pl-3 text-white rounded md:hover:text-pink-500  md:text-black md:p-0 dark:text-white" aria-current="page"> Home<AiOutlineHome/></a>
        </li>
        </Link>
<Link to="/about">
        <li>
          <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:text-pink-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> About  me<AiFillContacts/></a>
        </li>
        </Link>
        <Link to="/resume">
        <li>
          <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:text-pink-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume me<GrNotes/></a>
        </li>
        </Link>
        <Link to="/works">
        <li>
          <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:text-pink-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Works me<SiCountingworkspro/></a>
        </li>
        </Link>
        <Link to="/blog">
        <li>
          <a href="/#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:hover:text-pink-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog me<ImBlogger2/></a>
        </li>
        </Link>
      </ul>
    </div>
  </div>
</nav>

    
  )
}
