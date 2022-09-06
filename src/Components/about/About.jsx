import React from 'react'
import {GoDeviceMobile} from 'react-icons/go'
import {FaMapMarkerAlt} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import {FaCalendarAlt} from "react-icons/fa"
import Img4 from "../Images/talal.jpg"
export default function About() {
  return (
    <div className='container_flud py-10 mb-20 bg-white rounded-3xl'>
       
       <div className='flex items-center bg-white rounded-t-2xl'>
        <strong className='px-10 py-3 text-4xl'>About me</strong>
        <hr  className='w-60 h-1 mt-1 lg:visible md:visible invisible bg-[#F3475A]'/>
    </div>
       
    <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="lg:col-span-1 mx-10 col-span-3">
          <img
            src={Img4}
            className="rounded-3xl lg:w-[25rem] lg:h-[25rem]  md:w-[80%] my-9"
         alt='' />
        </div>
        <div className="my-10 col-span-2">
          <div className="md:text-start text-center">
            <strong className="text-2xl text-[#dd2476]">Who am I?</strong>
          </div>
          <p className="text-xl  md:text-start text-center text-gray-500 py-5 ">
            I'm Creative Director and Web Developer from Pakistan, Dubai,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p className="text-xl  md:text-start text-center text-gray-500 ">
            My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p>
          <div className="py-3">
            <div className=" md:text-start text-center">
              <strong className="text-2xl   text-[#dd2476]">
                Personal Info
              </strong>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="flex items-center py-5 ">
                <div className="text-2xl text-[#dd2476]  px-2 py-2 rounded shadow mr-2">
                  <GoDeviceMobile />
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    +92 3249989818
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    Lahore,Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FiMail />
                </div>
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                  Lilmax786@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl text-[#dd2476] bg-white px-2 py-2 rounded shadow mr-2">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p className="text-gray-500">Date Of Birth</p>
                  <p className="hover:text-[#dd2476] duration-500 font-semibold cursor-pointer">
                    March 24,2002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      
      

     




    </div>
  )
}
