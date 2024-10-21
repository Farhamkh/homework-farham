import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Form, FormControl, Button, Row, Col, Card} from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaShoppingCart, FaChartBar, FaUsers, FaSearch} from 'react-icons/fa';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
  datasets:[
    {
      label: 'Monthly Sales',
      data: [500, 100, 750, 150, 120, 200],
      backgroundColor: [
        "rgba(75,192,192,1)",
      ],
      borderColor: "black",
      borderWidth: 2
    }
  ]
};

const chartOptions = {
  responsive: true
};

  return (
    <div style={{display: 'flex'}}>
      <div style={{ width: '250px', height: '1000px', backgroundColor: 'gray', padding: '10px' }}>
        <h1>Dashboard</h1>
        
        <ul>
          <li><FaHome/>Dashboards</li>
          <li><FaUsers/>Users</li>
          <li><FaChartBar/>Analytics</li>
          <li><FaShoppingCart/>Orders</li>
          <li><FaCog/>Settings</li>
        </ul>
      </div>

      <div style={{ marginLeft: '30px', padding: '15px', width: '100%'}}>
      <h1>Farham's React App</h1>

        <Navbar>

          <Form style={{display:'flex', flex:1}}>
          <Button variant="outline-primary"><FaSearch/></Button>
            <FormControl placeholder="Search Here..." />
            
          </Form>
        
          <Nav>
            <Nav.Link><FaBell/></Nav.Link>
            <Nav.Link><FaUser/></Nav.Link>
          </Nav>

        </Navbar>

      

          <Card>
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>1,000,000</Card.Text>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$1,000,000,000</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>90,000</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Conversion Rate</Card.Title>
              <Card.Text>5%</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Sales Overview</Card.Title>
              <Bar data={chartData} options = {{responsive: true, plugins: { title: { display: true, text: 'Sales for 6 months'}}}}/>
            </Card.Body>
          </Card>
      

      </div>
    </div>
  );
}

export default App;
