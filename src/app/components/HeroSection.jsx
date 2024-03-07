
"use client"
import React from 'react'
import Image from "next/image"
import HeroImage from "../../../public/HeroImage.png"
import { TypeAnimation } from 'react-type-animation';

 

   
 
const HeroSection = () => {
  return (
    <section >
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">

        <h1 className="text-white mb-4  text-4xl sm:text-5xl lg:text-6xl font-extrabold" >
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">

          Hello, i'm{" "}
         </span>
         <br ></br>
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gaurav Parasar',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'MERN Stack',
        1000,
        'NEXT JS',
        1000
      ]}
      wrapper="span"
      speed={50}
     
      repeat={Infinity}
    /> 
         
         
         </h1>
        <p className="text-[#ADB7BE]  text-base sm:text-lg  mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis,  
        </p>
        <button className="px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-gradient-to-br from-blue-300 via-purple-500 to-red-500 hover:bg-slate-200 text-white ">Hire Me</button>
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800    text-white mt-3 ">
          <span className="block bg-[#121212] hover:bg-slate-800  rounded-full px-5  py-2 ">

          Download CV
          </span>
          
          </button>
        </div> 
      <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">

        <div className="rounded-full bg-[#272727] w-[250px] h-[250px] relative lg:w-[450px] lg:h-[450px]   " >
            <Image src={HeroImage} width={500} height={500} alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:-translate-y-1/2 top-2/3 left-1/2  "
            >

            </Image>
      </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
