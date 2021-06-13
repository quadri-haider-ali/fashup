import './App.css';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/navbar/SideNavbar';
<<<<<<< HEAD
import Details from './components/details/Details';

// const dashboard_data = [
//   {}
// ]
=======
>>>>>>> ca8b3013e7fe4eaf465f9f96707e1eb04e0341a2

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="bg-primary text-white container-fluid d-flex">
        <SideNavbar/>
<<<<<<< HEAD
        {/* <div>Lorem Ipsum</div> */}
        <Details/>
=======
        <div style={{flex:"4"}}>Lorem Ipsum</div>
>>>>>>> ca8b3013e7fe4eaf465f9f96707e1eb04e0341a2
      </div>
    </div>
  );
}

export default App;
