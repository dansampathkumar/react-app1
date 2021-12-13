import React,{Component, useState} from 'react';

import Formlist from './Formlist';

function Form1(){

    const [name,setname]=useState('');
    const [items,setitems] =useState([]);
   

   const changehandler = e =>{
        setname(e.target.value)
    }
    const submit = e =>{
        e.preventDefault();
    const newitems = [...items,name];
        setitems(newitems);
        console.log(name)
        setname("");
       
        
    }
    const deletehandler=(indexValue) =>{
        const delitems=items.filter((item,i) => i !==indexValue);
        setitems(delitems);
    }
    
    return(
        <div>
            <form  >
                <center>
                     <div>
                        <h3>make a list:{name}</h3>
                        <input type="text" name="form" value={name} onChange={changehandler} placeholder="enter any text"/>&nbsp;
                        <button onClick={submit}>add</button>
                        <Formlist todolist={items} del={deletehandler}/>
                    </div>
                   
                </center>
            </form>
           
            
        </div>
         
    )
}


export default Form1;




