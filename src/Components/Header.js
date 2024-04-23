import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AppsIcon from '@mui/icons-material/Apps';
import FlagIcon from '@mui/icons-material/Flag';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Link } from 'react-router-dom';
import img1 from './Body/images/person.png'
function Header() {
  return (
    <div>
      <center><img src={img1} height={200} width={200}/></center><br/>
            <h3><center>User Name</center></h3><br/>
            <h6 style={{marginLeft:'7px'}}><center>Username@company.com</center></h6><br/><br/><br/>
            
            <Link to='/' style={{textDecoration:'none',color:'white'}}><li style={{listStyleType:'none'}}><h4><HomeIcon style={{marginLeft:'20px'}}/>Home</h4></li></Link><br/><br/><br/><br/>
           
            
            <Link to='/file' style={{textDecoration:'none',color:'white'}}><li style={{listStyleType:'none'}}><h4><InsertDriveFileIcon style={{marginLeft:'20px'}}/>File</h4></li></Link><br/><br/><br/><br/>
            
            
            <Link to='/tasks' style={{textDecoration:'none',color:'white'}}> <li style={{listStyleType:'none'}}><h4><WorkspacesIcon style={{marginLeft:'20px'}}/>Tasks</h4></li></Link><br/><br/><br/><br/>
           
           
            <Link to='/applications' style={{textDecoration:'none',color:'white'}}><li style={{listStyleType:'none'}}><h4><AppsIcon style={{marginLeft:'20px'}}/>Applications</h4></li></Link><br/><br/><br/><br/>
            
            
            <Link to='/report' style={{textDecoration:'none',color:'white'}}><li style={{listStyleType:'none'}}><h4><FlagIcon style={{marginLeft:'20px'}}/>Report</h4></li></Link><br/><br/><br/><br/>
            
            
            <Link to='/courses' style={{textDecoration:'none',color:'white'}}><li style={{listStyleType:'none'}}><h4><BeenhereIcon style={{marginLeft:'20px'}}/>Courses</h4></li>~</Link>
            
    </div>
  )
}

export default Header
