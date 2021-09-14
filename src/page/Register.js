import React from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label"
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <FloatingLabel label="Enter Email" className='mb-3'/>
                            <FloatingLabel label="Enter Password" className='mb-3'/>
                            <FloatingLabel label="Repeat Password" className='mb-3'/>
                            <Form.Group className="mb-3">
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Register;