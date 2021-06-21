import React from "react";
import "./style.css";
import { Card, Row, Col } from 'react-bootstrap'

function EmployeeRow(props) {
    return (
      <Card>
      <Row>
          <Col>
              <Card.Img>
                
              </Card.Img>
          </Col>
          <Col>
              <Card.Text>
                  <p>{props.name}</p>
              </Card.Text>
          </Col>
          <Col>
              <Card.Text>
                  <p>{props.number}</p>
              </Card.Text>
          </Col>
          <Col>
              <Card.Text>
                  <p>{props.email}</p>
              </Card.Text>
          </Col>
          <Col>
              <Card.Text>
                  <p>{props.location}</p>
              </Card.Text>
          </Col>
      </Row>
  </Card>
      );
}

export default EmployeeRow;