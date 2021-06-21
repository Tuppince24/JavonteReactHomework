import React from "react"
import { Card, Row, Col } from "react-bootstrap"


function CardContainer(){
    return (
        <Card>
            <Row>
                <Col>
                    <Card.Img/>
                </Col>
                <Col>
                    <Card.Text>
                        <p>name</p>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <p>number</p>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <p>email</p>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text>
                        <p>Location</p>
                    </Card.Text>
                </Col>
            </Row>
        </Card>
    )
}

export default CardContainer;