import React from 'react';
import DashboardProjectDetails from '../components/DashboardProjectDetails';
import ProjectBidTable from '../components/ProjectBidTable';



function Main() {

  return (
      <div class="mt-4 sm:mt-10 max-w-screen-lg m-auto">
            <div >
            <DashboardProjectDetails/>
            <ProjectBidTable/>
            </div>
            <div class="pb-6 sm:pb-10"></div>
            <DashboardProjectDetails/>
            <ProjectBidTable/>
      </div>
   )
}

export default Main;