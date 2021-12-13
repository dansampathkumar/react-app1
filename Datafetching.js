import React, { useState ,useEffect} from "react";
import axios from 'axios';

function Datafetching(){
    const [posts,setPosts] =useState([])

     useEffect(() =>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            console.log(res)
          })
        .catch(err =>{
            console.log(err)
         })
    })
    return(
        <div>

        <ul>
             {posts.map((post,id) =>{
             <li key={post.id}>{post.title}</li>})}
        </ul>

        </div>
    )
}

export default Datafetching;



