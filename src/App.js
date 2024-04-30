import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Body/Home';
import File from './Components/Body/File';
import Tasks from './Components/Body/Tasks';
import Applications from './Components/Body/Applications';
import Report from './Components/Body/Report';
import Courses from './Components/Body/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
      <Row>
        <Col sm={2} className='one'>
            
            <Header/>
           
            
        </Col>
        <Col sm={10} style={{backgroundColor:"#68BBE3"}}>
           <Routes>
           <Route path='/varishini-react-project'exact Component={Home}/>
           <Route path='/file'exact Component={File}/>
           <Route path='/tasks'exact Component={Tasks}/>
           <Route path='/applications'exact Component={Applications}/>
           <Route path='/report'exact Component={Report}/>
           <Route path='/courses'exact Component={Courses}/>
           </Routes>
        </Col>
      </Row>
      </Router>
    </div>
  )
}

export default App
