import React,{Component} from "react";

import Child from "./child";


class Parent extends Component{
    constructor(){
        super()
        this.state={
            message:'parent'
        }
        this.changehadler=this.changehadler.bind(this)
    }
    changehadler(){
        alert(`hello ${this.state.message}`);
    }
    render(){
        return(
            <div>
                <Child changehadler={this.changehadler}/>
            </div>
        )
    }
}

export default Parent;

