import React from "react";


const Formlist = ({todolist,del}) =>{
    return(
        <div>
            {todolist.map((items,index) =>
            <div key={index}>
                {items}<button onClick={del(index)}>del</button>
            </div>)}
            
        </div>
    )
        
}

export default Formlist;