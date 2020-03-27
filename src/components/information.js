import React, { useState } from 'react';

import Table from "./table";
import Posts from "./userpost";

import dataSorce from './ajaxdatasorce';

function Informations(props) {

    console.log(props.posts)

    console.log(props.id)
    if (props.booli) {
        return <Table
            key={props.id}
            id={props.id}
            username={props.username}
            email={props.email}
            phone={props.phone}
            website={props.website}
            address={props.address}
            company={props.company}
        />
    }

    // return <Posts  posts={props.posts} />
    return props.posts.map((post) => {
        return (
            <Posts key={post.id} title={post.title} body={post.body} />
        )
    })

}

export default Informations 