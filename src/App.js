import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import pic from './pic.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.png'

import Form from 'react-bootstrap/Form';




import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src={pic} rounded />
        </Col>
        <Col xs={6} md={4}>
          <img className='pict' src={pic2} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <img className='pict' src={pic3} thumbnail />
        </Col>
      </Row>
    </Container>

    <Form className='pass'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
          <Card.Title>NEW LINK LIFE</Card.Title>
          <Card.Text>
          So close, no matter how far
          Couldn't be much more from the heart
          Forever trusting who we are
          And nothing else matters
          </Card.Text>
          <Button variant="primary">NEXT LIFE PAGE!</Button>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default App;
