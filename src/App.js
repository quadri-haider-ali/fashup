import './App.css';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/navbar/SideNavbar';
import Details from './components/details/Details';

// const dashboard_data = [
//   {}
// ]

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="bg-primary text-white container-fluid d-flex">
        <SideNavbar/>
        {/* <div>Lorem Ipsum</div> */}
        <Details/>
      </div>
    </div>
  );
}

export default App;
