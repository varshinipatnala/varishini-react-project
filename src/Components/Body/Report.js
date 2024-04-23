import React from 'react'
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ScatterChart,Scatter,ZAxis,PieChart,Pie,Legend,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import img1 from './images/working.jpg';
import img2 from './images/map.jpg';
const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

  const data03 = [
    {
      "x": 100,
      "y": 200,
      "z": 200
    },
    {
      "x": 120,
      "y": 100,
      "z": 260
    },
    {
      "x": 170,
      "y": 300,
      "z": 400
    },
    {
      "x": 140,
      "y": 250,
      "z": 280
    },
    {
      "x": 150,
      "y": 400,
      "z": 500
    },
    {
      "x": 110,
      "y": 280,
      "z": 200
    }
  ];
  const data04 = [
    {
      "x": 200,
      "y": 260,
      "z": 240
    },
    {
      "x": 240,
      "y": 290,
      "z": 220
    },
    {
      "x": 190,
      "y": 290,
      "z": 250
    },
    {
      "x": 198,
      "y": 250,
      "z": 210
    },
    {
      "x": 180,
      "y": 280,
      "z": 260
    },
    {
      "x": 210,
      "y": 220,
      "z": 230
    }
  ];
      
  
function Report() {
  return (
    <div>
      <Row>
        <Col>
        <h1>Social Media</h1>
        <h6>About Your Social Popularity</h6>
        <img src={img1} style={{width:'500px',height:'510px'}}/>
        </Col>
        <Col>
        <Row>
            <Col>
<div style={{height:'200px',width:'200px',backgroundColor:'#F8EA8C',borderRadius:'30px',marginTop:'90px'}}>
<InstagramIcon style={{fontSize:'50px',marginTop:'10px',marginLeft:'70px',color:'#FD7F20'}}/>
<h3 style={{color:'#FD7F20',marginLeft:'40px',marginTop:'10px'}}>Followers</h3>
<h1 style={{fontSize:'50px',color:'#FD7F20',marginLeft:'40px',marginTop:'20px'}}>35.6k</h1>
</div>
            </Col>
            <Col>
<div style={{height:'200px',width:'200px',backgroundColor:'#94C973',borderRadius:'30px',marginTop:'90px'}}>
<WhatsAppIcon style={{fontSize:'50px',marginTop:'10px',marginLeft:'70px',color:'#2F5233'}}/>
<h3 style={{color:'#2F5233',marginLeft:'40px',marginTop:'10px'}}>Followers</h3>
<h1 style={{fontSize:'50px',color:'#2F5233',marginLeft:'40px',marginTop:'20px'}}>70.6k</h1>
</div>
            </Col>
            </Row>
            <Row>
            <Col>
<div style={{height:'200px',width:'200px',backgroundColor:'#E57F84',borderRadius:'30px',marginTop:'90px'}}>
<TwitterIcon style={{fontSize:'50px',marginTop:'10px',marginLeft:'70px',color:'#DB1F48'}}/>
<h3 style={{color:'#DB1F48',marginLeft:'40px',marginTop:'10px'}}>Followers</h3>
<h1 style={{fontSize:'50px',color:'#DB1F48',marginLeft:'40px',marginTop:'20px'}}>20.6k</h1>
</div>
            </Col> 
            <Col>
<div style={{height:'200px',width:'200px',backgroundColor:'#A4E8E0',borderRadius:'30px',marginTop:'90px'}}>
<FacebookIcon style={{fontSize:'50px',marginTop:'10px',marginLeft:'70px',color:'#055C9D'}}/>
<h3 style={{color:'#055C9D',marginLeft:'40px',marginTop:'10px'}}>Followers</h3>
<h1 style={{fontSize:'50px',color:'#055C9D',marginLeft:'40px',marginTop:'20px'}}>100.6k</h1>
</div>
            </Col> 
            </Row>
        </Col>
      </Row><br/><br/>
      <Row>
<Col sm="4" style={{backgroundColor:'white',height:'350px',width:'350px',marginLeft:'10px'}}>
    <h1>Analysis</h1>
    <PieChart width={300} height={300}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#2F2440" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#D43790" label />
</PieChart>
</Col>
<Col sm="4" style={{marginLeft:'30px',backgroundColor:'white',height:'350px',width:'650px'}}>
<h1>Social Media Users</h1><br/>
<ScatterChart
  width={600}
  height={250}
  margin={{
    top: 20,
    right: 20,
    bottom: 10,
    left: 10,
  }}
 >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="x" type="number" name="stature" unit="cm" />
  <YAxis dataKey="y" type="number" name="weight" unit="kg" />
  <ZAxis dataKey="z" type="number" range={[64, 144]} name="score" unit="km" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <Legend />
  <Scatter name="Users" data={data03} fill="#32CD30" />
  <Scatter name="Non-users" data={data04} fill="#BA0F30" />
</ScatterChart>
</Col>
</Row><br/>
<Row style={{backgroundColor:'white',height:'370px',width:'1030px',marginLeft:'10px'}}>
<h1><center>Visitors all over the world</center></h1>
  <Col>
    <img src={img2} style={{height:'250px',width:'500px',marginTop:'30px'}}/>
  </Col>
  <Col  style={{backgroundColor:'#A4E5E0',height:'250px',width:'300px',marginTop:'33px',marginRight:'10px'}}>
  <br/>
  <h5>USA</h5>
  <ProgressBar variant="success" now={40} />
  <h5>INDIA</h5>
      <ProgressBar variant="info" now={80} />
      <h5>AUSTRALIA</h5>
      <ProgressBar variant="warning" now={50} />
      <h5>BRAZIL</h5>
      <ProgressBar variant="danger" now={20} />
  </Col>
  </Row>  
    
    
    </div>
  )
}

export default Report
