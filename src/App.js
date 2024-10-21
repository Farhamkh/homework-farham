import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Form, FormControl, Button, Card, Table, ProgressBar} from 'react-bootstrap';
import { FaHome, FaUser, FaCog, FaBell, FaShoppingCart, FaBars, FaChartBar, FaUsers, FaSearch} from 'react-icons/fa';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins } from 'chart.js';
import { color } from 'chart.js/helpers';
import { useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {

const [isSidebarOpen, setIsSidebarOpen] = useState(true);

const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
  datasets:[
    {
      label: 'Monthly Sales',
      data: [500, 100, 750, 150, 120, 200],
      backgroundColor: [
        "rgba(33, 66, 211, 0.26)",
      ],
      borderColor: "rgba(33, 24, 113, 0.7)",
      borderWidth: 2
    }
  ]
};



  return (
    <div style={{display: 'flex', height: '100vh'}}>
      {isSidebarOpen && (
      <div style={{ width: '300px', height: '100vh', padding: '10px'}}>
        <h1 style={{ marginDown: '20px'}}>Dashboard</h1>
        
        <ul style={{ listStyleType: 'none'}}>
          <li><FaHome style={{ marginRight: '20px'}}/>Dashboards</li>
          <li><FaUsers style={{ marginRight: '20px'}}/>Users</li>
          <li><FaChartBar style={{ marginRight: '20px'}}/>Analytics</li>
          <li><FaShoppingCart style={{ marginRight: '20px'}}/>Orders</li>
          <li><FaCog style={{ marginRight: '20px'}}/>Settings</li>
        </ul>
         
      </div>
      )};
       
      
      <div style={{flex:1}}>
        <h1>Farham's Dashboard</h1>
        
        <Navbar>
        <Button variant="outline-primary" onClick={toggleSidebar}>
          <FaBars />
        </Button>

          <Form style={{display:'flex', flex:1}}>
          <Button variant="outline-primary"><FaSearch/></Button>
            <FormControl placeholder="Search Here..." />
            
          </Form>
        
          <Nav>
            <Nav.Link><FaBell/></Nav.Link>
            <Nav.Link><FaUser/></Nav.Link>
          </Nav>

        </Navbar>

      <div style={{ backgroundColor:'rgba(61, 64, 187, 0.14)', marginLeft: '30px', padding: '15px'}}>
      
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
              <Card.Title>Performance Metrics</Card.Title>
              <div>
                CPU usage
                <ProgressBar now={90} variant='danger'/> 
              </div>
              <div>
                Memory usage
                <ProgressBar now={50} variant='dark'/> 
              </div>
              <div>
                Disk Usage
                <ProgressBar now={90} variant='danger'/> 
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <Table>
                    <th>#</th>
                    <th>User</th>
                    <th>Action</th>
                    <th>Date</th>
                <tbody>
                 
                  <tr>
                    <td>1</td>
                    <td>Alex Man</td>
                    <td>Purchased Item</td>
                    <td>10/20/2024</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Mark Stan</td>
                    <td>Favorited Item</td>
                    <td>10/18/2024</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Allen Dancer</td>
                    <td>Viewed Product Page</td>
                    <td>10/10/2024</td>
                  </tr>
                </tbody>

                <thread>
                  
                </thread>
              </Table>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body >
              <Card.Title>Sales Overview</Card.Title>
              <div style={{height:'600px'}}>
                <Bar data={chartData} options = {{responsive: true, plugins: { title: { display: true, text: 'Sales for 6 months'}}}}/>
              </div>            
            </Card.Body>
          </Card>
        

      </div>
      <footer style={{textAlign: 'center'}}>
        <p style={{padding:'20px'}}> &copy; {new Date().getFullYear()} Best Company. All Rights Reserved</p>
      </footer>
      </div>
      
    </div>
    
  );
}

export default App;
