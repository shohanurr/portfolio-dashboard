import React from 'react'
import profile_image from "../image/profile_image.jpg"

import './main.css'
import { Container,Button, Col, Row } from 'react-bootstrap';
function Sidemenu() {
 return (
  <div>
   <Container fluid>
    <Row>
      <Col sm={2}>
      <div className="profile">
         <Row>
             <Col sm={3}>
                <img src={profile_image} alt="" />
               </Col>

               <Col sm={9}> <p> Md Shohanur Rahaman <br/> mail: sohanbaf@gmail.com</p>  </Col>  
         </Row>    
      </div>

       <div className="sidebar_item">
        <ul>
          <li className="">Blog</li>
          <li className="">Portfolio</li>
         </ul>
       </div>
      </Col>

      <Col sm={10}>body content</Col>
    </Row>
   </Container>
  </div>
 )
}

export default Sidemenu
