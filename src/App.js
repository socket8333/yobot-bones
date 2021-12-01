import './App.css';
import ProjectBidTable from './components/ProjectBidTable';
import ProjectDetails from './components/ProjectDetails';
import BidForm from './components/BidForm';
import ProjectCard from './components/ProjectCard';
import ProjectCardGrid from './components/ProjectCardGrid';
import NavBar from './components/NavBar';
import DashboardTable from './components/DashboardTable';

function App() {
  return (
    // <div className="App font-Roboto bg-gray-900 m-auto text-gray-300 max-w-screen-md">
    //   <div class="pb-6 flex border border-gray-700 rounded-xl  flex-col-reverse max-w-screen-xl m-auto  bg-gray-800 sm:flex-row sm:pb-0">
    //   <BidForm/>
    //   <ProjectDetails/>
    //   </div>
    //   <ProjectBidTable/>

    // </div>

    <div>
      <NavBar/>
      <ProjectCardGrid/>
      <DashboardTable/>
    </div>
  );
}

export default App;
