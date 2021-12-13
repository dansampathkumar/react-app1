import React,{Component} from "react";

class Simple extends React.Component{
  constructor(){
    super()
    this.state ={
      message:'please subsribe'
    }
  }
    changemessage(){
      this.setState({
        message:"thank you for subscribe"
      })

    }
      render(){
        return (
          <div>

               <h1>{this.state.message}</h1>
        <button onClick={() =>this.changemessage()}>sumbit</button>
          </div>
         
    
        
        )

      }
    
}


export default Simple;