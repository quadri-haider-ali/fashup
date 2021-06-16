import React, {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/navbar/SideNavbar';
import Details from './components/details/Details';
import './App.css';

function App() {
  const [view,setView] = useState('Dashboard');
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="bg-primary text-white container-fluid d-flex">
        <SideNavbar viewHandler={new_value=>setView(new_value)}/>
        <Details view={view}/>
      </div>
    </div>
  );
}

export default App;
