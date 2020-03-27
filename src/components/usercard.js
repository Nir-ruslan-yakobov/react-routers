import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function UserCard(props) {
    
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    {props.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.email}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to={`/contact/${props.id}`}>
                        <button className="btn btn-warning">Ditilis</button>
                    </Link>
                </div>
            </div>
            <br />
        </React.Fragment>
    )
}

export default UserCard