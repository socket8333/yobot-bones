import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import ProjectBidTable from '../components/ProjectBidTable';
import BidForm from '../components/BidForm';


function Main() {

  return (
      <div>
        <div className="App mt-2 font-Roboto bg-gray-900 m-auto text-gray-300 max-w-screen-lg sm: mt-12">
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