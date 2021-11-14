import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './main.css'

function Body() {
  return (
    <div className='container-fluid'>
      <div className='body-icons'>
        <Row>
          <Col sm={4} md={4}>
            <FontAwesomeIcon icon={faCoffee} />
          </Col>
          <Col sm={4} md={4}>
            <FontAwesomeIcon icon={faCoffee} />
          </Col>
          <Col sm={4} md={4}>
            <FontAwesomeIcon icon={faCoffee} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Body
