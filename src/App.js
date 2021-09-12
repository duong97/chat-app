import logo from './logo.svg';
import './App.css';
import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(apiUrl)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React App
                        </a>
                    </header>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.id}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default App;
