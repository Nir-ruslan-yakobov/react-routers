import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import About from './components/about'
import Contact from './components/contact';
import User from './components/user';
import Home from './components/home';



function Navbar () {
    return (
        <React.Fragment>

            <Router> 

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link to="/home"> <p className="nav-link">Home</p> </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/about"> <p className="nav-link">About</p> </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact"> <p className="nav-link">Contact</p> </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <Route path='/home' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/contact/:id' component={User} />
                </div>

            </Router>

        </React.Fragment>
    )
}

export default Navbar