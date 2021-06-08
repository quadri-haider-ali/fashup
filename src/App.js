import './App.css';
import Navbar from './components/navbar/Navbar';
import SideNavbar from './components/navbar/SideNavbar';

function App() {
  return (
    <div style={{height:"100vh"}}>
      <Navbar/>
      <div className="bg-primary text-white container-fluid d-flex">
        <SideNavbar/>
        <div style={{flex:"4"}}>Lorem Ipsum</div>
      </div>
    </div>
  );
}

export default App;
