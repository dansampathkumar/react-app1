import React,{ useState } from "react";

function Countpre(){
    const initialcount = 0;
    const [count,setcount] =useState(initialcount);
    function Increment(){
        for(let i=0; i<5; i++){
        setcount(precount => precount + 1)

        }
    } 

    return(
        <div>
            count :{ count }
        <button onClick={() =>setcount(initialcount)}>reset</button>
        <button onClick={() =>setcount(precount => precount + 1)}>increment</button>
        <button onClick={() =>setcount(precount => precount - 1)}>decrement</button>
        <button onClick={Increment}>increment5</button>
        </div>
    )
        
}

export default Countpre;
