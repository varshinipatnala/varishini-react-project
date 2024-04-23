import React from 'react'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';
import {Button} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Legend,AreaChart,Area,BarChart,Bar,LineChart,Line,ComposedChart, Composed, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import img1 from './images/area.jpg';
import img2 from './images/calender.jpg';
import img3 from './images/Donut.gif';
import img4 from './images/men1.jpg';
import img5 from './images/men2.jpg';
import img6 from './images/women1.jpg';
import img7 from './images/women2.jpg';
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




function Home() {
   
  return (
    <div className='two'>
        <h1>Dashboard User <DensitySmallIcon style={{marginLeft:'630px'}}/></h1><br/><br/>
<Row>
    
    <Col sm={3}>
        <div className='child1'>
    <h4>Earning<MonetizationOnIcon style={{marginLeft:'70px'}}/></h4><br/>
<center><h1>$628</h1></center>
</div>
    </Col>
    <Col sm={3}>
        <div className='child1'>
    <h4>Shares<ShareIcon style={{marginLeft:'80px'}}/></h4><br/>
    <center><h1>2434</h1></center>
    </div>
    </Col>
    <Col sm={3} >
        <div className='child1'>
    <h4>Likes<ThumbUpIcon style={{marginLeft:'110px'}}/></h4><br/>
    <center><h1>1259</h1></center>
    </div>
    </Col>
    <Col sm={3} >
        <div className='child1'>
    <h4>Rating<StarIcon style={{marginLeft:'90px'}}/></h4><br/>
    <center><h1>8,5</h1></center>
    </div><br/><br/><br/>
    </Col>

    <Row>
        <Col sm={8}>
            <Row>
            <div className='three'>
            <h2>Result <Button className="btn btn-warning" style={{marginLeft:'470px'}}>Check Now</Button></h2><br/>
            <ComposedChart width={680} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#FEDE00" stroke="#FEDE00" />
  <Bar dataKey="pv" barSize={20} fill="#DF362D" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
</ComposedChart>
            </div>
            </Row>
            <br/><br/>
            <div className='five'>
            <Row>
            <Col sm={6}>
            <img src={img1} height={200} width={500}/>
            </Col>
            
            
            <Col sm={6}>
            <img src={img2} height={200} width={325}/>
            </Col>
           
            </Row>
            </div>
        </Col>
        
        <Col sm={4}>
            <div className='four'style={{height:'570px'}}>
        <center><img src={img3} height={200} width={200} style={{marginTop:'20px'}}/></center><br/>
        <Row>
            <Col sm={3}>

            </Col>
            <Col sm={6}>
                <h5>Lorem Ipsum<hr/></h5>
                <h5>Lorem Ipsum<hr/></h5>
                <h5>Lorem Ipsum<hr/></h5>
                <h5>Lorem Ipsum<hr/></h5>
                < Link to='/courses'><Button className="btn btn-warning">Check Now</Button></Link>
            </Col>
            <Col sm={3}>

            </Col>
        </Row>
       
       
       
        </div>
        </Col>
   
    </Row>
</Row><br/><br/>
<Row>
    <center><h1><b>Courses</b></h1></center><br/><br/>
    <Col sm='3' className='b'><br/>
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={img4} />
      <Avatar alt="Travis Howard" src={img5}/>
      <Avatar alt="Cindy Baker" src={img6}/>
      <Avatar alt="Agnes Walker" src={img7} />
      <Avatar alt="Trevor Henderson" src={img4}/>
    </AvatarGroup>
<h4 style={{color:'white',fontSize:'40px'}}>Web</h4>
<h4 style={{color:'white',fontSize:'40px'}}>Development</h4>
<br/>
<h6 style={{color:'black',fontSize:'30px'}}>10 Tasks:89%</h6><br/>
<ProgressBar variant="warning" now={80} />
    </Col>
    <Col sm='3' className='c'><br/>
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={img6} />
      <Avatar alt="Travis Howard" src={img7}/>
      <Avatar alt="Cindy Baker" src={img4}/>
      <Avatar alt="Agnes Walker" src={img7} />
      <Avatar alt="Trevor Henderson" src={img4}/>
    </AvatarGroup>
<h4 style={{color:'white',fontSize:'40px'}}>Mobile App</h4>
<h4 style={{color:'white',fontSize:'40px'}}>Design</h4>
<br/>
<h6 style={{color:'black',fontSize:'30px'}}>12 Tasks:49%</h6><br/>
<ProgressBar variant="success" now={49} />
    </Col>
    <Col sm='3' className='d'><br/>
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src={img7} />
      <Avatar alt="Travis Howard" src={img6}/>
      <Avatar alt="Cindy Baker" src={img5}/>
      <Avatar alt="Agnes Walker" src={img4} />
      <Avatar alt="Trevor Henderson" src={img4}/>
    </AvatarGroup>
<h4 style={{color:'white',fontSize:'40px'}}>Facebook</h4>
<h4 style={{color:'white',fontSize:'40px'}}>Brand UI Kit</h4>
<br/>
<h6 style={{color:'black',fontSize:'30px'}}>12 Tasks:76%</h6><br/>
<ProgressBar variant="primary" now={76} />
    </Col>
</Row>

    </div>
  )
}
export default Home


    
  