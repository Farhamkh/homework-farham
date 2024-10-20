import logo from './logo.svg';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{ width: '250px', height: '800px', backgroundColor: 'gray', padding: '10px' }}>
        <h1>Dashboard</h1>
      </div>

      <div>
        <h1>Farham's React App</h1>
      </div>
    </div>
  );
}

export default App;
