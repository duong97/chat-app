import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Login from './page/Login'
import Register from './page/Register'
import NavBar from './layout/NavBar'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <BrowserRouter>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/" exact>
                        <h1>Umsilabum</h1>
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
