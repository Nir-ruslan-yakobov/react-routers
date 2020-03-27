import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Table from './table';
import Posts from './userpost';

import dataSorce from './ajaxdatasorce';
import Informations from './information';


function User({ match }, props) {



    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [booli, setBooli] = useState(true);

    useEffect(() => {

        console.log(match)
        dataSorce.ajaxDataSorceGet(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then((data) => {
                setUser(data)
            })

    }, [])

    const getPosts = () => {
        console.log(booli)
        if (booli) {
            dataSorce.ajaxDataSorceGet(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then((data) => {
                    console.log(data)
                    setPosts(data)

                })
        }
        setBooli(!booli)

    }


    return (
        <React.Fragment>
            <h3>User Page
                {/* <Link to={`/contact/${user.id}/${user.id}`}> */}
                <button
                    onClick={getPosts}
                    className={`btn btn-${booli ? 'warning' : 'danger'}`}
                    style={{ float: 'right' }}>
                    {booli ? 'Posts' : 'Back'}
                </button>
                {/* </Link> */}
            </h3>
            <hr />
            <h4>Hello: {user.name}</h4>

            <div className="container">
                <Informations booli={booli} {...user} posts={posts} />
            </div>

        </React.Fragment>

    )
}

export default User;