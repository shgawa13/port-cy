import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Web Development",
      description: "Design & Development",
      img: img1,
    },
    {
      id: 2,
      title: "APP UI/UX Design",
      description: "App Development",
      img: img2,
    },
    // {
    //   id: 3,
    //   title: "",
    //   description: "Design & Development",
    //   img: img3,
    // },
    // {
    //   id: 4,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img2,
    // },
    // {
    //   id: 5,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img3,
    // },
    // {
    //   id: 6,
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   img: img1,
    // },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          {/* lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
          cupiditate! Molestiae placeat architecto nihil obcaecati illum minima
          incidunt dolores? Officia consectetur optio non totam cum eos soluta
          ipsa et quod. */}
        </p>
        <div className="flex justify-center items-center gap-4 mt-2 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={` text-slate-50 font-bold text-[19px] border-2  bg-[#000] rounded-[6px] p-[15px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#3a86ff,#00bbf9)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`text-slate-50 font-bold text-[19px] border-2  bg-[#000] rounded-[6px] p-[15px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#3a86ff,#00bbf9)]" : "dddd"
            }  `}
          >
            WhoAmI
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`text-slate-50 font-bold text-[19px] border-2  bg-[#000] rounded-[6px] p-[15px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#3a86ff,#00bbf9)]" : ""
            }`}
          >
            Text-2
          </button>
        </div>
        <div className="grid grid-cols-5 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            atque porro quasi dolorum facere tempore maxime nemo quia nulla
            blanditiis doloribus, dolore, voluptas aspernatur harum facilis
            cumque magni soluta sapiente. */}
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nisi. */}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
