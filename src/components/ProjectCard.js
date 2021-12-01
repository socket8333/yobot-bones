import React from 'react';


function ProjectCard() {

  return (
    <a href="javascript:void(0)">
    <div class="flex flex-col pb-3 overflow-hidden bg-gray-800 rounded shadow-sm">
      <div class="flex-grow w-full text-center ">
        <a
          href="javascript:void(0)"
          class="block mb-5 -mx-2 -mt-2 transition duration-200 ease-out origin-bottom transform hover:scale-105 hover:shadow-xl active:shadow active:opacity-50"
        >
          <img
            src="http://127.0.0.1:8080/images/3drender.jpg"
            alt="Photo"
            class="inline-block rounded"
          />
        </a>
        <h3 class="text-lg font-semibold text-gray-200">
          DOMS TRINKETS
        </h3>
        <h4 class="text-sm font-semibold text-gray-600">
          03H:34M:23S
        </h4>
      </div>
    </div>
  </a>
   )
}

export default ProjectCard;