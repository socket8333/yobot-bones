import React from 'react';
import DashboardProjectDetails from '../components/ProjectDetails';
import ProjectBidTable from '../components/ProjectBidTable';



function Main() {

  return (
      <div>

            <DashboardProjectDetails/>
            <ProjectBidTable/>
            <div class="pb-6 sm:pb-10"></div>
            <DashboardProjectDetails/>
            <ProjectBidTable/>
      </div>
   )
}

export default Main;