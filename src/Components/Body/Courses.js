import React, { useState } from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import img6 from './images/html5.jpg';
import img5 from './images/html4.jpg';
import img2 from './images/html1.jpg';
import img3 from './images/html2.jpg';
import img4 from './images/html3.jpg';
import img1 from './images/html.jpg';
function Courses() {
  const [count,setcount]=useState(0);
  return (
    <div>
        <div style={{color:'black'}}>
      <h3><ViewListIcon style={{fontSize:'40px',color:'black'}}/><span style={{fontSize:'40px',marginLeft:'5px'}}>Courses</span> Dashboard</h3>
      </div><br/><br/>
      <h4 style={{marginLeft:'300px',color:'black',fontSize:'40px'}}>Your Educational Goals</h4><br/>
    <Row>
        <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'60px'}}>
         <img src={img1} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>HTML,CSS,and Javascript for Web development</b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>Front-end web development ,HTML and css ,javascript,web development</p>
        <Button onClick={()=>setcount(count+1)} style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        </Col>

        <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'20px'}}>
         <img src={img2} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>Build a portfolio website with HTML,CSS,and javascript</b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>HTML and css ,javascript,web development,webdesign</p>
        <Button onClick={()=>setcount(count+1)}  style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        </Col>

        <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'20px'}}>
         <img src={img3} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>UX design</b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>user experience ,user experience design,user research ,audit,human computer interaction</p>
        <Button onClick={()=>setcount(count+1)} style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        </Col>
    </Row><br/><br/><br/>
    <Row>
    <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'60px'}}>
         <img src={img4} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>Introduction to web development</b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>computer programming,front-end web development,html,and css,javascript,web design</p>
        <Button onClick={()=>setcount(count+1)} style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        </Col>

        <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'20px'}}>
         <img src={img5} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>Introduction to front-end development </b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>React(web frame work),web development,front-end we development,wed design.</p>
        <Button onClick={()=>setcount(count+1)} style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        </Col>

        <Col sm='4' style={{backgroundColor:'white',height:'400px',width:'300px',marginLeft:'20px'}}>
         <img src={img6} style={{height:'200px',width:'200px',marginLeft:'30px'}}/>
        <h6><center><b>Build a full website using wordpress</b></center></h6>
        <p><span style={{color:'blue'}}>Skills you'll gain:</span><br/>computer science,leadership and management,marketing,web design,web development</p>
        <Button onClick={()=>setcount(count+1)} style={{marginLeft:'80px',backgroundColor:'green'}}>Get Course</Button>
        
        </Col>
    </Row><br/><br/><br/>
    <Row>
      
<Col style={{backgroundColor:'white',width:'500px',height:'200px',marginLeft:'60px',marginRight:'65px'}}>
<div style={{display:'flex',backgroundColor:'#B1D8B7',marginTop:'25px'}}>
<h1 style={{color:'#003060',marginTop:'60px',marginLeft:'90px'}}>Total Courses Purchased:</h1>
<ImportContactsIcon style={{marginTop:'60px',marginLeft:'80px',fontSize:'60px'}}/>
<div style={{marginTop:'100px',height:'50px',width:'50px'}}><h2>{count}</h2></div>
</div>
</Col>
    </Row>
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Courses
