import React, { Component } from "react";
import Card from "../compoents/Card/CardContainer"
import Header from "../compoents/Header/header";
import EmployeeRow from "../compoents/EmployeeRow";
import { Container } from "react-bootstrap"
// import { Container, Row, Col,  Button , Alert , Breadcrumb, Card, Form } from 'react-bootstrap';

function App(){
  return(
    <>
   <Header/>
   <Container md>
      <Card/>
      <EmployeeRow
      name="tay"
      number="xxxxxxxxxx"
      email="test@test.com"
      location="123 west wall St"
      ></EmployeeRow>
   </Container>
   
   </>
  )
}

export default App;

{/* <Container>
   <Form>
     <Row>
       <Col md>
        <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="exemail@porn.com"/>
        <Form.Text className="text-muted">
          we will never share your email
        </Form.Text>
      </Form.Group>
       </Col>
       <Col md>
        <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="email" placeholder="Password"/>
        <Form.Text className="text-muted">
          we will never share your Password
        </Form.Text>
      </Form.Group>
       </Col>
     </Row>
     
     <Button variant= "secondary" type="submit"> login </Button>
   </Form>
   <Card className="mb-3" style={{background: "grey"}}>
     <Card.Img style={{height: "100px" , width: "100px"}} />
     <Card.Body>
       <Card.Title>this is the Title</Card.Title>
       <Card.Text>this is my text</Card.Text>
       <Button variant= "primary"> read more </Button>
     </Card.Body>
   </Card>
   <Breadcrumb>
    <Breadcrumb.Item>Test</Breadcrumb.Item>
    <Breadcrumb.Item>Test2</Breadcrumb.Item>
    <Breadcrumb.Item active="true">Test3</Breadcrumb.Item>
   </Breadcrumb>
   <Alert variant= "primary">this is a button</Alert>
   <Button variant= "danger"> test button </Button>
   </Container> */}