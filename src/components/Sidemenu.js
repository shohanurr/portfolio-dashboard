import profile_image from '../image/profile_image.jpg'

import { Container, Button, Col, Row } from 'react-bootstrap'

function Sidemenu() {
  return (
    <div>
      <div className='profile'>
        <Row>
          <Col sm={3}>
            <img src={profile_image} alt='' />
          </Col>

          <Col sm={9}>
            <p>
              Md Shohanur Rahaman <br /> mail: sohanbaf@gmail.com
            </p>
          </Col>
        </Row>
      </div>

      <div className='sidebar_item'>
        <ul>
          <li className=''>Blog</li>
          <li className=''>Portfolio</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidemenu
