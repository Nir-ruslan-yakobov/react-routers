import React , {useState, useEffect}  from 'react';
import users from './users'



function User ({match}, props) {

    const [user, setUser] = useState({})

    useEffect(() => {
       console.log(match)
       const getUser = async () => {
           let fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
           let userParse = await fetchUser.json();
           // let userLog = match.params.id;
           // let setCurrentUser =  users.filter((u) => u.id == userLog)
           console.log(userParse)
           
   
           setUser(userParse);
       }
       getUser()
    }, [])
    
    



    return (
        <React.Fragment>
            <h3>User Page</h3>
            <hr />
            <p>Hello: {user.name}</p>
        </React.Fragment>

    )
}

export default User;