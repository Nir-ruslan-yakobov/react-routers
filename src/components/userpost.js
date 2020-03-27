import React from 'react';


function Posts(props) {
    console.log(props)

    return (
        <React.Fragment>
            {/* <div className="container"> */}
            <div className="row">
                <div className="col-6" >
                    <div style={{width: 1000, height: 275, margin: 7 }} className="card">
                        <div className="card-header"> {props.title} </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{props.body}</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </React.Fragment>
    )
}

export default Posts;