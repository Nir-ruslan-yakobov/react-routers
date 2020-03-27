import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import About from './about'
import Contact from './contact';
import User from './user';
import Home from './home';
import Posts from './userpost';



function Navbar () {
    return (
        <React.Fragment>

            <Router> 

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link to="/home"> <h5 className="nav-link">Home</h5> </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/about"> <h5 className="nav-link">About</h5> </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact"> <h5 className="nav-link">Contact</h5> </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <Route path='/home' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/contact/:id' exact component={User} />
                    {/* <Route path='/contact/:id/:postId' component={Posts} /> */}
                </div>

            </Router>

        </React.Fragment>
    )
}

export default Navbar