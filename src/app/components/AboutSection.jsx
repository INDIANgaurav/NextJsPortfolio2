"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import deskSetup from "../../../public/about-image.png";
import TabButton from "./TabButton";

const Tab_Data = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className="list-disc md:list-inside pl-2 flex flex-wrap gap-7 md:text-xl" >
                <li>Node Js</li>
                <li>React Js</li>
                <li>Express Js</li>
                <li>MongoDb</li>
                <li>JavaScript</li>
                <li>Next Js</li>
                <li>TailwindCss</li>
                <li>C++</li>
                <li>OOPS</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disc list-inside pl-2 md:text-xl">
                <li>MCA - Jain University(2024)</li>
                <li>BCA - MD University Rohtak (2022)</li>
                <li>12th - M.B.L.M sr. sec. School</li>
                 
                 
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content:(
            <ul className="list-disc list-inside pl-2 md:text-xl">
                <li>Full-Stack Web Development BootCamp by Code-help</li>
               
            </ul>
        )
    },
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white pt-20   ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16    ">
        <Image src={deskSetup} width={500} height={500} alt="aboutimage" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full " >
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base md:text-lg ">
          I am  
             <span className="font-bold m-1 ">

              Gaurav Parasar 
            </span>
             a full stack web developer with a passion for creating
             interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, HTML, CSS,
            and Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row mt-8 md:text-2xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
                {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
                {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
                {" "}
              Certifications{" "}
            </TabButton>
           
          </div>
          <div className="mt-8">
            {
                Tab_Data.find((t) =>  t.id === tab).content
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
