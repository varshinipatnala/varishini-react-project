import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { BarChart,Bar,Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Gradient } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import img3 from './images/graph2.jpg';
import img2 from './images/graph1.jpg';
import img7 from './images/pie.png';
import img8 from './images/download.png';
import img1 from './images/men1.jpg';
import img6 from './images/men2.jpg';
import img5 from './images/women2.jpg';
import img4 from './images/women1.jpg';
import img9 from './images/ex1.jpg';
import img10 from './images/ex2.jpg';
import img11 from './images/ex3.png';
const data = [
  {
    "name": "Page A",
    "present": 4000,
    "Absent": 2400
  },
  {
    "name": "Page B",
    "present": 3000,
    "Absent": 1398
  },
  {
    "name": "Page C",
    "present": 2000,
    "Absent": 9800
  },
  {
    "name": "Page D",
    "present": 2780,
    "Absent": 3908
  },
  {
    "name": "Page E",
    "present": 1890,
    "Absent": 4800
  },
  {
    "name": "Page F",
    "present": 2390,
    "Absent": 3800
  },
  {
    "name": "Page G",
    "present": 3490,
    "Absent": 4300
  }
]

                            
function Tasks() {

  
 
  return (
    <div>
      <div className='overlap'>
    <Row  className='six'>
          <Col sm="2">
          <img src={img1} height={150} width={150} style={{borderRadius:'90px',marginLeft:'80px',marginTop:'50px'}}/>
          </Col>
          
          <Col sm="3">
          <h1 style={{color:'white',marginTop:'60px',marginLeft:'90px',fontSize:'100px'}}>87</h1>
          </Col>
         
          <Col sm="3">
          <p style={{color:'white',marginTop:'80px',marginLeft:'10px',fontSize:'30px'}}><b>Your Learning Level Points !!!</b></p>
          
          <h6 style={{fontSize:'15px',color:'white',marginLeft:'5px'}}>James, you did a great job last week !</h6>
          </Col>
          <Col sm="2" style={{marginTop:'70px'}}>
            <div>
            <h3 style={{color:'white'}}>3.5h</h3>
            <h6 style={{color:'white'}}>Lastweek</h6>
            <img src={img2} style={{height:"70px",width:"70px"}}/>
            </div>
            </Col>
            <Col sm="2" style={{marginTop:'70px'}}>
            <div>
            <h3 style={{color:'white'}}>125h</h3>
            <h6 style={{color:'white'}}>LastMonth</h6>
            <img src={img3} style={{height:"70px",width:"70px"}}/>
            </div>
          </Col>
          </Row> 
          </div>

  <Row>
  
    <Col sm="4" >
    <div className='a'>
    <div className='overlap1'>
      <Button style={{backgroundColor:'pink',borderColor:'pink',borderRadius:'10px',marginLeft:'75px'}}>Improve your skills</Button>
<br/><br/>
<h4>MY TEAMMATES <hr/></h4>
<div style={{display:'flex'}}>
<img src={img4} height={'50'} width={'50'} style={{borderRadius:'25px',marginLeft:'25px'}}/>
<p style={{marginLeft:'25px'}}><b>Anna Edward</b></p>
<h4 style={{marginLeft:'45px'}}>85</h4>
</div>
<hr/>
<div style={{display:'flex'}}>
<img src={img5} height={'50'} width={'50'} style={{borderRadius:'25px',marginLeft:'25px'}}/>
<p style={{marginLeft:'25px'}}><b>Madrid</b></p>
<h4 style={{marginLeft:'85px'}}>76</h4>
</div>
<hr/>
<div style={{display:'flex'}}>
<img src={img6} height={'50'} width={'50'} style={{borderRadius:'25px',marginLeft:'25px'}}/>
<p style={{marginLeft:'25px'}}><b>Joseph allice</b></p>
<h4 style={{marginLeft:'45px'}}>64</h4>
</div>
<hr/>
</div>
</div>
    </Col>
    
    <Col sm="4">
      <div className='a'>
    <div className='overlap1'>
      <h4 style={{marginLeft:'18px'}}>Your main Skillset <SettingsIcon style={{marginLeft:'80px'}}/></h4>
      <p style={{marginLeft:'18px'}}>You have Approved by <span style={{color:'red'}}>12 points</span> Lastweek</p>
      <center><img src={img7} style={{height:'150px',width:'150px'}}/></center>
     
      <Col>
      <div style={{display:'flex'}}>
      <div style={{backgroundColor:'#A16AE8',height:'20px',width:'20px',borderRadius:'40px',marginLeft:'10px'}}></div>
      <p style={{marginLeft:'10px'}}>Graphic designer :35%</p>
      </div>
      <div style={{display:'flex'}}>
      <div style={{backgroundColor:'#FF4500',height:'20px',width:'20px',borderRadius:'40px',marginLeft:'10px'}}></div>
      <p style={{marginLeft:'10px'}}>UI/UX :45%</p>
      </div>
      <div style={{display:'flex'}}>
      <div style={{backgroundColor:'#FF8300',height:'20px',width:'20px',borderRadius:'40px',marginLeft:'10px'}}></div>
      <p style={{marginLeft:'10px'}}>Management :55%</p>
      </div>
     
      </Col>
    </div>
    </div>
    </Col>
    <Col sm="4">
    <div className='a'>
    <div className='overlap1'> 
    <div style={{display:'flex'}}>
    <FormatAlignLeftIcon style={{backgroundColor:'#0E86D4',marginLeft:'30px',marginTop:'5px'}}/><h3 style={{marginLeft:'20px'}}>NEXT LESSONS</h3><br/>
      </div>
      <center><p>YOU WILL NEED 3.5hrs THIS WEEK</p></center>
      <div style={{display:'flex'}}>
    <PlayArrowIcon style={{backgroundColor:'#A16AE8',marginLeft:'30px',marginTop:'5px',borderRadius:'40px'}}/><h6 style={{marginLeft:'20px'}}>Advanced creative Technique</h6>
      </div><br/>
      <div style={{display:'flex'}}>
    <PlayArrowIcon style={{backgroundColor:'#FD7F20',marginLeft:'30px',marginTop:'5px',borderRadius:'40px'}}/><h6 style={{marginLeft:'20px'}}>Customer Journey Mapping</h6>
      </div><br/>
      <div style={{display:'flex'}}>
    <PlayArrowIcon style={{backgroundColor:'#FEDE00',marginLeft:'30px',marginTop:'5px',borderRadius:'40px'}}/><h6 style={{marginLeft:'20px'}}>Building Remote Teams</h6>
      </div><br/>
      <div style={{display:'flex'}}>
    <PlayArrowIcon style={{backgroundColor:'#EC9EC0',marginLeft:'30px',marginTop:'5px',borderRadius:'40px'}}/><h6 style={{marginLeft:'20px'}}>Figma workshop</h6>
      </div><br/>
      <div style={{display:'flex'}}>
    <PlayArrowIcon style={{backgroundColor:'#9DA993',marginLeft:'30px',marginTop:'5px',borderRadius:'40px'}}/><h6 style={{marginLeft:'20px'}}>web Development</h6>
      </div><br/>
     </div>
      </div>
    </Col>
  </Row>
<br/><br/>
  <Row>
    <Col sm="6" style={{height:'310px',width:'710px',backgroundColor:'white',marginLeft:'10px'}}>
      <h4>Analysis</h4><br/>
      <BarChart width={700} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Absent" fill="#DB1F48" />
  <Bar dataKey="present" fill="#01949A" />
</BarChart>
    </Col>
    <Col sm="6" style={{height:'310px',width:'300px',backgroundColor:'white',marginLeft:'20px'}}>
      <center><h1 style={{fontSize:'80px',marginTop:'40px'}}>82%</h1></center>
      <h4><center><i>Students Attendence</i></center></h4><br/>
      <img src={img8} style={{height:'100px',width:'270px'}}/>

    </Col>
  </Row> 
   <br/><br/>
   <Row>
   <Col sm="4" style={{height:"300px",width:'310px',backgroundColor:'white',marginLeft:'10px'}}>
   <SettingsIcon style={{backgroundColor:'#0E86D4',borderRadius:'40px',marginTop:'20px',height:'60px',width:'60px',marginLeft:'110px'}}/><br/><br/>
    <center><h1 style={{fontSize:'50px'}}>45.8K</h1></center>
    <center><h4>Total Views</h4></center>
    <img src={img9} style={{height:'90px',width:'290px',marginBottom:'30px'}}/>
   </Col>
   <Col sm="4" style={{height:"300px",width:'310px',backgroundColor:'white',marginLeft:'60px'}}>
   <AccountCircleIcon style={{backgroundColor:'#76B947',borderRadius:'40px',marginTop:'20px',height:'60px',width:'60px',marginLeft:'110px'}}/><br/><br/>
    <center><h1 style={{fontSize:'50px'}}>17.2K</h1></center>
    <center><h4>Profiles</h4></center>
    <img src={img10} style={{height:'90px',width:'290px',marginBottom:'30px'}}/>
   </Col>
   <Col sm="4" style={{height:"300px",width:'310px',backgroundColor:'white',marginLeft:'50px'}}>
   <ImportantDevicesIcon style={{backgroundColor:'#E57F84',borderRadius:'40px',marginTop:'20px',height:'60px',width:'60px',marginLeft:'110px'}}/><br/><br/>
    <center><h1 style={{fontSize:'50px'}}>5.82K</h1></center>
    <center><h4>Reports Submitted</h4></center>
    <img src={img11} style={{height:'90px',width:'290px',marginBottom:'30px'}}/>
   </Col>
   
  </Row>    
      
</div>
  
           
      
    
  )
}

export default Tasks
