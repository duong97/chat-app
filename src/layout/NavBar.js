import React from "react";
import {Form, Button, Container, Row, Col, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, BrowserRouter, Switch, Route, Link} from 'react-router-dom';

export default function NavBar() {

    const history = useHistory;

    const logout = () => {
        localStorage.removeItem('token');
        history.push("/login");
    }

    return (
        <Nav activeKey="/" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {localStorage.getItem('token') ?
                <Nav.Item>
                    <Button variant="outline-success" onClick={logout}>Logout</Button>
                </Nav.Item>
                : (
                    <React.Fragment>
                        <Nav.Item>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav.Item>
                    </React.Fragment>
                )
            }
        </Nav>
    );
}
