import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons'
import './main.css'
import T from '../image/T.svg'
import gif from '../image/gif.svg'

function Body() {
  return (
    <div className='container-fluid'>
      <div className='body-icons'>
        <Row className='text-center main_row'>
          <div className='heading'>
            <h1>Select your project file:</h1>
          </div>
          {/*<Col sm={3} md={3}>
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
  </Col> */}
        </Row>
        <Row className='main_row'>
          <Form>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Label className='label'>
                Choose image of your project
              </Form.Label>
              <Form.Control type='file' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='title.ControlInput1'>
              <Form.Label className='label'>Title</Form.Label>
              <Form.Control type='text' placeholder='Enter Project Title' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='title.ControlInput1'>
              <Form.Label className='label'>Video Link</Form.Label>
              <Form.Control type='url' placeholder='Enter Project Url' />
            </Form.Group>
          </Form>
        </Row>
      </div>
    </div>
  )
}

export default Body
