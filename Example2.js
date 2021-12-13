import React,{Component,useState} from "react";

const Example2=({list,del}) =>{
    console.log(list);
return(
    <div>
        {list.map((kk,index) =>
        <div key={kk}>
            {kk}<button onClick={() =>del(index)}>del</button>
        </div>)}
    </div>
)


}





export default Example2;