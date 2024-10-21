import logo from './logo.svg';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaShoppingCart, FaChartBar } from 'react-icons/fa';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{ width: '250px', height: '1000px', backgroundColor: 'gray', padding: '10px' }}>
        <h1>Dashboard</h1>
        
        <ul>
          <li><FaHome/>Dashboards</li>
          <li><FaUser/>Users</li>
          <li><FaChartBar/>Analytics</li>
          <li><FaShoppingCart/>Orders</li>
          <li><FaCog/>Settings</li>
        </ul>
      </div>

      <div style={{marginLeft: '30px', padding: '15px'}}>
        <h1>Farham's React App</h1>
      </div>
    </div>
  );
}

export default App;
