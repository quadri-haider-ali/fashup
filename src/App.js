<<<<<<< HEAD
import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/navbar/SideNavbar';
import Details from './components/details/Details';
import './App.css';

function App() {
  const [view,setView] = useState('Dashboard');
=======
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
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="bg-primary text-white container-fluid d-flex">
<<<<<<< HEAD
        <SideNavbar viewHandler={new_value=>setView(new_value)}/>
        <Details view={view}/>
=======
        <SideNavbar/>
<<<<<<< HEAD
        {/* <div>Lorem Ipsum</div> */}
        <Details/>
=======
        <div style={{flex:"4"}}>Lorem Ipsum</div>
>>>>>>> ca8b3013e7fe4eaf465f9f96707e1eb04e0341a2
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
      </div>
    </div>
  );
}

export default App;
