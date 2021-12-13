import React,{useState} from "react";

function First(){

  const [count,setcount] =useState(0);

  return(
    <button onClick={() =>setcount(count+1)}>count{count}</button>
  )
}

export default First;



