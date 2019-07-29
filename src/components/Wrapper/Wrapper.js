import React from 'react';


const Wrapper = props => <div className='wrapper' style={containerStyle}>{props.children}</div> 

let containerStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    margin: "auto"
}

export default Wrapper;