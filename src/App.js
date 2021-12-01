import './App.css';
import ProjectBidTable from './components/ProjectBidTable';
import ProjectDetails from './components/ProjectDetails';
import BidForm from './components/BidForm';
import ProjectCard from './components/ProjectCard';
import ProjectCardGrid from './components/ProjectCardGrid';
import NavBar from './components/NavBar';
import DashboardProjectDetails from './components/DashboardProjectDetails';
import Main from './pages/Main';
import Dashboard from './pages/DashBoard';
import ProjectGrid from './pages/ProjectGrid';

function App() {
  return (

      <div>
        <NavBar/>
        {/* <Main/> */}
        {/* <Dashboard/> */}
        <ProjectGrid/>
      </div>

  );
}

export default App;
