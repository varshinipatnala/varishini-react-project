import React from 'react'
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import StarIcon from '@mui/icons-material/Star';
import { Button } from 'react-bootstrap';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import img6 from './images/a.jpg';
import img5 from './images/sales.gif';
import img2 from './images/men1.jpg';
import img3 from './images/men2.jpg';
import img4 from './images/women2.jpg';
import img1 from './images/women1.jpg';
function Applications() {
  return (
    <div>
    <Row style={{marginTop:'40px'}}>
        <div className='eight'>
            <div>
        <AirplanemodeActiveIcon style={{backgroundColor:'#A3EBB1',height:'60px',width:'60px',marginleft:'30px'}}/>
        </div>
        <div>
        <h4>Applications<span style={{marginLeft:'10px'}}></span>Dashboard</h4>
<p>This is an example dashboard created using build-in elements and components.</p>
        </div>
        <div>
        <StarIcon style={{backgroundColor:'#FF8300',height:'30px',width:'30px',marginLeft:'230px'}}/>
        
        
        <Button className='btn btn-primary'style={{height:'30px',width:'110px',marginLeft:'10px'}}>+CreateNew</Button>
        </div>
        </div>
    </Row><br/><br/>
    <Row>
        <div style={{backgroundColor:'white',height:'340px',width:'1000px',marginLeft:'30px'}}>
        <hr/>
        <h6>Data Statistics</h6><hr/><br/>
        <div style={{display:'flex'}}>
        <div style={{display:'flex',marginLeft:'50px'}}>
        <LocalAtmOutlinedIcon style={{backgroundColor:'#FAD02C',height:'100px',width:'100px',borderRadius:'60px',color:'white'}}/>
        <div style={{marginLeft:'10px'}}>
        <h6>Cash Deposits</h6>
        <h1>1,7M</h1>
        <p>$4.1%<span style={{color:'blue'}}> LessEarnings </span></p>
        </div>
        </div>

        <div style={{display:'flex',marginLeft:'80px'}}>
        <AccountBalanceOutlinedIcon style={{backgroundColor:'#E43D40',height:'100px',width:'100px',borderRadius:'60px',color:'white'}}/>
        <div style={{marginLeft:'10px'}}>
        <h6>Invested Dividents</h6>
        <h1>9M</h1>
        <p>$14.1%<span style={{color:'blue'}}>Grow rate </span></p>
        </div>
        </div>

        <div style={{display:'flex',marginLeft:'80px'}}>
        <QueueMusicOutlinedIcon style={{backgroundColor:'#18A558',height:'100px',width:'100px',borderRadius:'60px',color:'white'}}/>
        <div style={{marginLeft:'10px'}}>
        <h6>Capital Gain</h6>
        <h1>$563</h1>
        <p>$7.83%<span style={{color:'blue'}}> Increased By </span></p>
        </div>
        </div>
        </div>
        <hr/>
        <center><Button className='btn btn-success'>View Complete Report</Button></center>
        <hr/>
        </div>
</Row><br/><br/>
<Row>
    <Col sm="4" style={{height:'580px',width:'300px',backgroundColor:'white',marginLeft:'40px'}}>
       <div style={{display:'flex'}}>
       <h3 style={{color:'#003B73'}}>New </h3>
       <h3 style={{color:'#003B73'}}>Users</h3>
       <div style={{marginLeft:'45px'}}>
       <Button><SearchOutlinedIcon/>Search</Button>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
        <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img1} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 style={{marginTop:'10px'}}>Veronica </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Customer</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div>
       <br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img2} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 style={{marginTop:'10px'}}>Joseph</h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Customer</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img3} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 >John smith </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Admin</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img4} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 style={{marginTop:'10px'}}>Mandrel </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Customer</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img1} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 style={{marginTop:'10px'}}>Veronica </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Customer</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img3} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 >John smith </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Admin</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div><br/>
       <div style={{backgroundColor:'#D4BBDD',height:'50px',width:'100%'}}>
       <div className='hover'>
       <div style={{display:'flex'}}>
<img src={img4} style={{height:'50px',width:'50px',borderRadius:'50px'}}/>
       <h6 style={{marginTop:'10px'}}>Mandrel </h6>
       <p style={{marginLeft:'20px',marginTop:'10px'}}>Customer</p><EditOutlinedIcon style={{marginTop:'10px'}}/>
       <DeleteTwoToneIcon style={{fontSize:'40px',marginLeft:'35px'}}/>
       </div>
       </div>
       </div>
    </Col>

    <Col sm='4' style={{height:'580px',width:'300px',backgroundColor:'white',marginLeft:'40px'}}>
    <div style={{display:'flex'}}>
       <h4 style={{color:'#003B73'}}>Sales of the Lastweek</h4>
       <div style={{marginLeft:'45px'}}>
       < MoreVertTwoToneIcon />
       </div>
       </div><br/>
       <img src={img5} style={{height:'200px',width:'200px',marginLeft:'40px'}}/>
    <h4 style={{marginLeft:'90px'}}>Progress</h4><br/>
    <div style={{display:'flex'}}>
    <SignalCellularAltTwoToneIcon style={{height:'30px',width:'30px',backgroundColor:'#738FA7',borderRadius:'40px'}}/>
     <h5 style={{marginLeft:'10px'}}>Most Sales</h5>
     </div>
     <p style={{marginLeft:'30px'}}>Authors with the best sales</p><br/>
     <div style={{display:'flex'}}>
    <PieChartTwoToneIcon style={{height:'30px',width:'30px',backgroundColor:'#738FA7',borderRadius:'40px'}}/>
     <h5 style={{marginLeft:'10px'}}>Total Sales Lead</h5>
     </div>
     <p style={{marginLeft:'30px'}}>40% increased on week-to-week reports</p><br/>
    </Col>
    <Col sm='4' style={{height:'580px',width:'300px',backgroundColor:'white',marginLeft:'40px'}}>
    <div style={{display:'flex'}}>
       <h4 style={{color:'#003B73'}}>Sales Details</h4>
       <div style={{marginLeft:'45px'}}>
       < MoreVertTwoToneIcon />
       </div>
       </div><br/>
       <div style={{display:'flex'}}>
       <div>
       <ShoppingBagOutlinedIcon style={{backgroundColor:'#F582A8',height:'50px',width:'50px',marginTop:'20px'}}/>
       </div>
       <div>
       <h1 style={{marginLeft:'20px'}}>$2,034</h1>
       <p style={{marginLeft:'40px'}}>Author sales</p>
       </div>
       </div>

       <div style={{display:'flex'}}>
       <div>
       <ShowChartOutlinedIcon style={{backgroundColor:'#BD97CB',height:'50px',width:'50px',marginTop:'20px'}}/>
       </div>
       <div>
       <h1 style={{marginLeft:'20px'}}>$706</h1>
       <p style={{marginLeft:'40px'}}>Commission</p>
       </div>
       </div>

       <div style={{display:'flex'}}>
       <div>
       < ReceiptOutlinedIcon style={{backgroundColor:'#FBC740',height:'50px',width:'50px',marginTop:'20px'}}/>
       </div>
       <div>
       <h1 style={{marginLeft:'20px'}}>$49</h1>
       <p style={{marginLeft:'40px'}}>Average Bid</p>
       </div>
       </div>

       <div style={{display:'flex'}}>
       <div>
       <AllInclusiveOutlinedIcon style={{backgroundColor:'#66D2D6',height:'50px',width:'50px',marginTop:'20px'}}/>
       </div>
       <div>
       <h1 style={{marginLeft:'20px'}}>$5.8M</h1>
       <p style={{marginLeft:'40px'}}>All Time Sales</p>
       </div>
       </div>
       <img src={img6} style={{width:'280px',height:'130px'}}/>
       </Col>
</Row><br/>
<Row>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px',marginLeft:'26px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Total Orders</b></h4>
<p style={{marginLeft:'10px'}}>Last year Expenses</p>
</div>
<div style={{color:'green',fontSize:'40px',marginLeft:'60px',marginTop:'20px'}}>
1896
</div>
</div>
</div>
</Col>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px',marginLeft:'13px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Followers</b></h4>
<p style={{marginLeft:'10px'}}>people interested</p>
</div>
<div style={{color:'#FF2511',fontSize:'40px',marginLeft:'60px',marginTop:'20px',marginLeft:'60px'}}>
45,9%
</div>
</div>
</div>
</Col>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Total Orders</b></h4>
<p style={{marginLeft:'10px'}}>Last year Expenses</p>
</div>
<div style={{color:'green',fontSize:'40px',marginLeft:'60px',marginTop:'20px'}}>
1896
</div>
</div>
</div>
</Col>
</Row>
<Row>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px',marginLeft:'26px',marginTop:'20px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Clients</b></h4>
<p style={{marginLeft:'10px'}}>Total clients profit</p>
</div>
<div style={{color:'green',fontSize:'40px',marginLeft:'60px',marginTop:'20px'}}>
$12.6K
</div>
</div>
</div>
</Col>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px',marginLeft:'13px',marginTop:'20px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Products</b></h4>
<p style={{marginLeft:'10px'}}>Total Revenue </p>
</div>
<div style={{color:'blue',fontSize:'40px',marginLeft:'110px',marginTop:'20px'}}>
$3M
</div>
</div>
</div>
</Col>
<Col>
<div style={{backgroundColor:'white',height:'100px',width:'300px',marginTop:'20px'}}>
<div style={{display:'flex'}}>
<div style={{marginTop:'20px'}}>
<h4 style={{marginLeft:'10px'}}><b>Clients</b></h4>
<p style={{marginLeft:'10px'}}>Total clients profit</p>
</div>
<div style={{color:'green',fontSize:'40px',marginLeft:'60px',marginTop:'20px'}}>
$12.6K
</div>
</div>
</div>
</Col>
</Row>
    </div>
  )
}

export default Applications
