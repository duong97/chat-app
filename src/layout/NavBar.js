import React from "react";
import {Form, Button, Container, Row, Col, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <Nav activeKey="/" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default NavBar;