import React,{useState} from 'react';

const heading={
    color:"green"
}




function Objectstate(){
    const [name,setname] =useState({firstname:'',lastname:''});


    return(
        <form>
            <div>
                <input type='text' value={name.firstname} onChange={e => setname({...name,firstname:e.target.value})}/>
                <input type='text' value={name.lastname} onChange={e => setname({...name,lastname:e.target.value})}/>
                <h1 style={heading}>your firstname is-{name.firstname}</h1>
                <h2>your lastname is-{name.lastname}</h2>
                <h3>{JSON.stringify(name)}</h3>

            </div>
        </form>
    )
};


export default Objectstate;