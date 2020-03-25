import React, { useState, useEffect } from 'react';
import users from '../users'
import Table from './table'
import dataSorce from './ajaxdatasorce'


function User({ match }, props) {

    const [user, setUser] = useState({})

    useEffect(() => {
        console.log(match)
        dataSorce.ajaxDataSorceGet(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then((data) => {
                setUser(data)
            })
    }, [])


    return (
        <React.Fragment>
            <h3>User Page</h3>
            <hr />
            <h4>Hello: {user.name}</h4>
            <Table
                key={user.id}
                id={user.id}
                username={user.username}
                email={user.email}
                phone={user.phone}
                website={user.website}
                address={user.address}
                company={user.company}
            />
        </React.Fragment>

    )
}

export default User;