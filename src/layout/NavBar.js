import React from "react";
import {Button, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuth} from '../util/use-auth'

export default function NavBar() {
    const auth = useAuth()

    return (
        <Nav activeKey="/" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {auth.user ? (
                <Nav.Item>
                    <Button variant="outline-success" onClick={() => auth.signout()}>Logout</Button>
                </Nav.Item>
            ) : (
                <React.Fragment>
                    <Nav.Item>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav.Item>
                </React.Fragment>
            )}
        </Nav>
    );
}
