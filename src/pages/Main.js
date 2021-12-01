import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import ProjectBidTable from '../components/ProjectBidTable';
import BidForm from '../components/BidForm';


function Main() {

  return (
      <div>
        <div className="max-w-screen-lg m-auto mt-2 mt-12 text-gray-300 bg-black App font-Roboto sm:">
        <div class="pb-6 sm:pb-0 flex border border-gray-700 rounded-xl  flex-col-reverse max-w-screen-xl m-auto  bg-gray-800 sm:flex-row sm:mb-4">
            <BidForm/>
            <ProjectDetails/>
            </div>
            <ProjectBidTable/>
     
      </div>
      </div>
   )
}

export default Main;