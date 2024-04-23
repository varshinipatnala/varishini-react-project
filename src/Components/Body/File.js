import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/container';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import img1 from './images/pic3.jpg';
import img2 from './images/pic2.jpg';
import img3 from './images/pic1.jpg';
import img4 from './images/pic4.jpg';
import img5 from './images/men1.jpg';
import img6 from './images/men2.jpg';
import img7 from './images/women2.jpg';
import img8 from './images/women1.jpg';
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]







 function File() {


  return (
    <div>
      <h1><b>School</b>Mentor</h1><br/><br/>
      
      <Row>
        <Col  style={{marginLeft:'10px'}}>
          
            <div className='col1'><br/>
<h1><center>3256</center></h1>
<h4><center>STUDENTS</center></h4>
</div>
</Col>
        
        <Col  style={{marginLeft:'10px'}}>
          <div className='col2'><br/>
        <h1><center>68</center></h1>
<h4><center>EMPLOYEES</center></h4>
</div>
</Col>
        
        <Col  style={{marginLeft:'10px'}}>
        <div className='col3'><br/>
        <h1><center>16</center></h1>
<h4><center>COURSES</center></h4>
</div>
</Col>
        
        <Col  style={{marginLeft:'10px'}}> 
      <div className='col4'><br/>
        <h1><center>3,47,000</center></h1>
<h4><center>REVENUE</center></h4>
</div><br/><br/>
</Col>
      </Row>

       
       
       <Row>
        <Col sm='6'>
        <div className='main'>
        <h4>Daily Attendence Overview</h4>
      
       <div style={{backgroundColor:'red' ,height:'10px',width:'10px',marginLeft:'90px',marginTop:'8px',borderRadius:'10px'}}></div>
       <div><p>Student</p></div>
        
          <div style={{backgroundColor:'green' ,height:'10px',width:'10px',marginLeft:'60px',marginTop:'8px',borderRadius:'10px'}}></div>
          <div><p>Employee</p></div>
        </div>
           
           
           
           <div className='main1'>
           <AreaChart width={600} height={450} data={data}
  margin={{ top: 70, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FF8BDA" stopOpacity={1}/>
      <stop offset="95%" stopColor="#FF8BDA" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#116530" stopOpacity={1}/>
      <stop offset="95%" stopColor="#116530" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#FF8BDA" fillOpacity={6} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#116530" fillOpacity={6} fill="url(#colorPv)" />
</AreaChart>
           </div>
           </Col>
           
           <Col sm='6'style={{backgroundColor:'#FFA384',height:'460px'}}>
          <Row>
            <Col>
            <h5 style={{marginLeft:'90px',color:'black'}}><b>Admission</b></h5>
            <img src={img1} height={190} width={190} style={{marginLeft:'85px'}}/>
            </Col>
            <Col>
            <h5 style={{color:'black'}}><b>Fees Collection</b></h5>
            <img src={img2} height={190} width={190}/>
            </Col>
            </Row>
             
            <Row>
            <Col>
            <h5 style={{marginLeft:'90px',color:'black'}}><b>Syllabus</b></h5>
            <img src={img3} height={190} width={190} style={{marginLeft:'85px'}}/>
            </Col>
            <Col>
            <h5 style={{color:'black'}}><b>Sports Activity</b></h5>
            <img src={img4} height={190} width={190}/>
            </Col>
            </Row>
            </Col> 
            </Row>
<br/><br/>
      <Container  >
        <Row style={{backgroundColor:'#B4F8C8'}}>
          <Col >
          <h1 style={{color:'#000C66'}}>Active User</h1>
          </Col>
          <Col>
          <Button style={{backgroundColor:'#274472',marginLeft:'290px'}}>Lastweek</Button>
          <Button className='btn btn-primary'>All Month</Button>
          </Col>
          <hr/>
          </Row>
          
          <Row style={{backgroundColor:'white'}}> 
            <Col><h5><b>#</b></h5></Col>
            <Col><h5><b>Name</b></h5></Col>
            <Col><h5><b>City</b></h5></Col>
            <Col><h5><b>Status</b></h5></Col>
            <Col><h5><b>Actions</b></h5></Col>
          </Row>
        
        <Row style={{backgroundColor:'white'}}>
          <Col><h6>#345</h6></Col>
          <Col>
          <div>
            <img src={img5} height={'50'} width={'50'} style={{borderRadius:'25px'}}/>
          <p><b>john doe</b></p>
          </div>
          </Col>
          <Col><h6>Madrid</h6></Col>
          <Col><h6><Button className='btn btn-danger'>PENDING</Button></h6></Col>
          <Col><h6><Button style={{backgroundColor:'#274472'}}>Details</Button></h6></Col>
          <hr/>
        </Row>
        <Row style={{backgroundColor:'white'}}>
          <Col><h6>#347</h6></Col>
          <Col>
          <div>
            <img src={img6} height={'50'} width={'50'} style={{borderRadius:'25px'}}/>
          <p><b>Ruben tillman</b></p>
          </div>
          </Col>
          <Col><h6>Berlin</h6></Col>
          <Col><h6><Button className='btn btn-success'>COMPLETED</Button></h6></Col>
          <Col><h6><Button style={{backgroundColor:'#274472'}}>Details</Button></h6></Col>
          <hr/>
        </Row>
        <Row style={{backgroundColor:'white'}}>
          <Col><h6>#321</h6></Col>
          <Col>
          <div>
            <img src={img7} height={'50'} width={'50'} style={{borderRadius:'25px'}}/>
          <p><b>Elliot</b></p>
          </div>
          </Col>
          <Col><h6>London</h6></Col>
          <Col><h6><Button className='btn btn-warning'>In progress</Button></h6></Col>
          <Col><h6><Button style={{backgroundColor:'#274472'}}>Details</Button></h6></Col>
          <hr/>
        </Row>
        <Row style={{backgroundColor:'white'}}>
          <Col><h6>#355</h6></Col>
          <Col>
          <div>
            <img src={img8} height={'50'} width={'50'} style={{borderRadius:'25px'}}/>
          <p><b>Vinnie wagstaff</b></p>
          </div>
          </Col>
          <Col><h6>Sweden</h6></Col>
          <Col><h6><Button className='btn btn-primary'>On Hold</Button></h6></Col>
          <Col><h6><Button style={{backgroundColor:'#274472'}}>Details</Button></h6></Col>
          <hr/>
        </Row>
        </Container>     
            
            
            
            
                
               
        
        
        
       
        
  </div>
 )
}
export default File
