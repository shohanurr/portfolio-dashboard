import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import './main.css'
import T from '../image/T.svg'
import gif from '../image/gif.svg'

function Body() {
  return (
    <div className='container-fluid'>
      <div className='body-icons'>
        <Row className='text-center'>
          <Col sm={3} md={3}>
            <div className='icon'>
              <FontAwesomeIcon icon={faImage} />
            </div>
            <div className='icon_lebel'>Image</div>
          </Col>
          <Col sm={3} md={3}>
            <div className='icon'>
              <img src={T} />
            </div>
            <div className='icon_lebel'>Text</div>
          </Col>
          <Col sm={3} md={3}>
            <div className='icon'>
              <img src={gif} />
            </div>
            <div className='icon_lebel'>Gif</div>
          </Col>

          <Col sm={3} md={3}>
            <div className='icon'>
              <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className='icon_lebel'>Video Link</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Body
