import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

function SearchForm(props){
    return(
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                    <Form.Control type="text" placeholder="Search"/>
                    </Form.Group>
                </Col>
                <Col>
                <Button type="Submit" variant="info">{props.button}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchForm;