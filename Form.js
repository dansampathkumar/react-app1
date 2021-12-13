import React,{Component, useState} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state ={
            value:''
        }
    }
    getdata = (Event) => {
        console.log("event:",Event.target.value)
        this.setState({value:Event.target.value})
        let value = this.state.value;
    }
    changevalue() {
        let value = this.state.value;
        console.log("value:",value)
    }
   
    render(){
    return(
            <div>
                <form>

                <p>hello</p>
                <input type="text" value={this.state.value} onChange={this.getdata}/>
                <button onClick={() =>this.changevalue()}>add</button>

                </form>

            </div>
        )
    }
}



export default Form;
