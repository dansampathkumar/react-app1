import React,{ useState} from 'react';


function Example(){
    const [sss,setsss] =useState('')
    const [list,setList] =useState([])

  const changehandler=e =>{
      setsss(e.target.value)
  }
   const submit=e =>{
       const newword=[...list,sss]
       setList(newword)
       setsss('');
   }
   const deletehandler =(indexValue)=>{
       setList((prevState)=>{
      return  prevState.filter((elem,i)=>i!==indexValue)
       })
   }
    return(
        <div>
            <div >
                <center>
                <div>
                    <h1>make list of technologies</h1>
                    <input type="text" value={sss} placeholder="enter text" onChange={changehandler}/>
                    <button   onClick={submit}>add</button>
                </div>
                
                </center>
            </div>
            <center>
            {list.map((kk,index) =>
        <div key={index}>
            {kk}<button onClick={() =>deletehandler(index)}>del</button>
        </div>)}
            </center>
        </div>
    )
}




export default Example;