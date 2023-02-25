import React from 'react';

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box flex justify-center relative overflow-hidden text-center">
        <img src={item.img} alt="" />
        <div className="p absolute top-[-100%] left-0 h-full w-full bg-[#00bbf9] p-4 xl:pt-0 lg:pt-24 tl:pt-24 sm:pt-24 xs:pt-20 ">
          <h1 className="font-bold text-3xl  xl:text-2xl tl:text-2xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
