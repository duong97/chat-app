import React from "react";
import {useAuth} from '../util/use-auth'
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Login from '../page/Login'
import Register from '../page/Register'

export default function NavBar() {
    const auth = useAuth()
    return (
        <BrowserRouter>
            <Route path="/login">
                {auth.user ? <Redirect to={"/"}/> : <Login/>}
            </Route>
            <Route path="/register">
                {auth.user ? <Redirect to={"/"}/> : <Register/>}
            </Route>
            <Route path="/" exact>
                <h1>Umsilabum</h1>
            </Route>
        </BrowserRouter>
    );
}
