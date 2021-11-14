import 'bootstrap/dist/css/bootstrap.min.css'
import './components/main.css'
import Sidemenu from './components/Sidemenu'

import Body from './components/Body'
import { Container, Button, Col, Row } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <div className='sidenav'>
        <Sidemenu />
      </div>
      <Body />
    </div>
  )
}

export default App
