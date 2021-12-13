//props example

import React, {component} from "react";

function Welcome(props){
    return <h1>hello,{props.firstname}{props.lastname}</h1>
}

export default Welcome;
