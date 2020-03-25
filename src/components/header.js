import React from 'react';
import logo from '../logo.svg';


function Header() {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 style={{ color: 'white' }}>React Router</h1>
                </header>
            </div>
        </React.Fragment>
    )
}

export default Header