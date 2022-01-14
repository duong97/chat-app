import React, {useState} from "react";
import {Form, Button, Container, Row, Col, Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListUserActive({listUser}) {
    return (
        <Container fluid>
            {listUser ? listUser.map(user => {
                return <h1 key={user.key}>{user.username}</h1>
            }) : <i>null</i>}
        </Container>
    );
}
