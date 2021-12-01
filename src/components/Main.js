import React from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectBidTable from './ProjectBidTable';
import BidForm from './BidForm';


function Main() {

  return (
      <div>
        <BidForm/>
        <ProjectDetails/>
        <ProjectBidTable/>
      </div>
   )
}

export default Main;