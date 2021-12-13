import React, { useState,Component } from 'react';


function Effect(){
    const [count,setCount] =useState(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={() =>setCount(count:count+1)}>click {count} times</button>
        </div>
    )
}


export default Effect;