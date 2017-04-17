import React, { Component } from 'react';
import './App.css';
import InputFormSimple from './InputFormSimple.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Buy vs Rent Model</h2>
                </div>
                <p className="App-intro">
                    To get started, provide some details:
                </p>
                <div className="App-input-simple">
                    <InputFormSimple />
                </div>
            </div>
        );
    }
}

export default App;
