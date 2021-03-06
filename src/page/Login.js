import React, {useState} from "react";
import {Form, Button, Container, Row, Col, Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../util/use-auth'

export default function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const auth = useAuth()

    const handleSubmit = async e => {
        e.preventDefault();
        auth.signin(username, password)
    }

    const renderError = () => {
        if(error){
            return (
                <Alert key="0" variant="danger">
                    {error}
                </Alert>
            )
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        {renderError()}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" required onChange={e => setUsername(e.target.value)}/>
                            <Form.Text className="text-muted">
                                Contain alphanumeric, . and _.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// };