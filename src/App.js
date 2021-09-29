import './App.css';
import React from 'react';
import NavBar from './layout/NavBar'
import Body from './layout/Body'
import {ProvideAuth} from './util/use-auth'

function App() {
    return (
        <ProvideAuth>
            <div className="App">
                <NavBar/>
                <Body/>
            </div>
        </ProvideAuth>
    );
}

export default App;
