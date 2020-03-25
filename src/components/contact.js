import React, { useState, useEffect } from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserCard from './usercard';
import dataSorce from './ajaxdatasorce'

// import users from './users'



function Contact() {

    const [user, setUsers] = useState([]);

    useEffect(() => { // פונקציה שמופעלת ברגע שהקומפוננטה מופעלת
        console.log('IS RENDER')
        dataSorce.ajaxDataSorceGet('https://jsonplaceholder.typicode.com/users')
            .then((data) => {
                setUsers(data);
            })
    }, []) // המערך מכיל את המשנים שהרינדור תלוי בהם במקרא זה בכלום אז רק פעם אחת


    return (
        <React.Fragment>

            <h3>Contact Page</h3>
            <hr />
            <div className="container p-2">
                {user.map((u, idx) => <UserCard key={idx} name={u.name} email={u.email} id={u.id} />)}
            </div>

        </React.Fragment>
    )

}

export default Contact;