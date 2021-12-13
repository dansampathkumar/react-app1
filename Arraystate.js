import React,{ useState } from "react";

function Arraystate(){
    const [items,setitems] =useState([]);

    function addItem(){
        setitems([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10)+1}])
    }



    return(
        <div>
            <button onClick={addItem}>add a number</button>
            <ul>
                {items.map((items,index) =>(<div key={items.index}>{index}--{items.value}</div>))}
            </ul>
        </div>
    )
}

export default Arraystate;






