"use client";

import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import ProjectTag from "./ProjectTag";

const ProjectData = [
  {
    id: 1,

    title: "Studynotion Ed-Tech App",
    desc: "MERN Stack Engineered an EdTech platform using MERN stack, featuring course commerce and lecture streaming functionalities. Enabled course purchasing and selling, integrating a secure payment gateway. Seamlessly managed state with Redux, while React Router facilitated  smooth lecture navigation. Integrated advanced search functionality, user authentication via JWT, and sleek UI design using Tailwind CSS.  backend data Stored on Cloudinary and MongoDb.",
    image: "/ProjectImages/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/INDIANgaurav/stuydnotion",
    previewUrl: "https://stuydnotion.vercel.app/",
  },
  {
    id: 2,

    title: "Glamour Food App",
    desc: "Glamour Food is a sophisticated food delivery application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers users a seamless experience for exploring and ordering from a curated selection of high-end, glamorous dishes from top restaurants. The app integrates Stripe payment processing to facilitate secure and convenient transactions. Users can easily browse through menus, place orders",
    image: "/ProjectImages/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/INDIANgaurav/glamourFullstack",
    previewUrl: "https://glamour-food-app1.vercel.app/",
  },
  {
    id: 3,

    title: "React Shopping Cart",
    desc: "Frontend Shopping Cart App using Reactjs , Redux-toolkit and Tailwind css library ",
    image: "/ProjectImages/project4.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 4,

    title: "GP-Space",
    desc: "Created Only frontEnd WebPage with reactjs and tailwind css and make Parallax effect ",
    image: "/ProjectImages/project3.png",
    tag: ["All", "Mobile", "Web"],
    gitUrl:
      "https://github.com/INDIANgaurav/-Space-Website-Using-ReactJS-and-Tailwind-CSS",
    previewUrl: "https://glittery-daifuku-90258f.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filterProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6  ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="">
        {filterProjects.map((p) => (
          <ProjectCards
            key={p.id}
            title={p.title}
            description={p.desc}
            imgUrl={p.image}
            tags={p}
            gitUrl={p.gitUrl}
            previewUrl={p.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
