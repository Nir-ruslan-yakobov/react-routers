import React, { useState, useEffect } from 'react';
import './table.css'


function Table(props) {


    const [adress, setAdress] = useState({})
    const [comp, setComp] = useState({})

    useEffect(() => {
        getAddressAndComp()
    }, [])

    const getAddressAndComp = () => {
        if (props.address) {
            console.log(props.address.street)
            setAdress(props.address)
        }
        if (props.company) {
            setComp(props.company)
        }
    }

    return (
        <React.Fragment>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Web Site</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td>{props.username}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                        <td>{props.website}</td>
                    </tr>
                </tbody>
            </table>

            <h3>Adress: </h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Street:{adress.street}</li>
                <li className="list-group-item">Suite: {adress.suite}</li>
                <li className="list-group-item">City: {adress.city}</li>
                <li className="list-group-item">Zip code: {adress.zipcode}</li>
            </ul>
            <br />
            <h3>Company: </h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {comp.name}</li>
                <li className="list-group-item">Catch phrase: {comp.catchPhrase}</li>
                <li className="list-group-item">Bs: {comp.bs}</li>
            </ul>
            <br />
            <br />
        </React.Fragment>
    )
}


export default Table