import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
const ContactMe = () => {
  return (
    <div id="contact" className="grid md:grid-cols-2 my-12 md:my-40 py-24 gap-8  relative">
         <div className="  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
        <div className="z-10">
        <h5 className=" text-xl font-bold text-white my-2  ">Let's Connect</h5>
        <p className=" text-[#ADB7BE] mb-4 max-w-md  ">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className=" socials flex flex-row gap-2   ">
          <Link
            href="https://github.com/INDIANgaurav"
            target="_blank"
            title="github"
          >
            <FaGithub className="text-white text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gaurav-parasar"
            target="_blank"
            title="linkedin"
          >
            <FaLinkedin className="text-white text-2xl" />
          </Link>
        </div>
      </div>

      <div className="    gap-4">
        

 
  <p  className="  font-bold text-white my-2  "> <span className=" text-xl font-bold text-primary-400 my-2  ">  Email :-</span> 
     gasharma512@gmail.com</p>
  <p  className="  font-bold text-white my-2  "> <span className=" text-xl font-bold text-secondary-500 my-2  ">  Contact :-</span>    +91 8053102896</p>
       
      
      </div>
    </div>
  )
}

export default ContactMe
