import React,{Component} from 'react';

function Child(props){
    return(
        <div>
            <button onClick={props.changehadler}>greet parent</button>
        </div>
    )
}

export default Child;