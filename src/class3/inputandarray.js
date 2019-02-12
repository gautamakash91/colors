import React, { Component } from 'react';

export default class ArrayInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            arr:[]
        }
    }

    getInput=(event)=>{
        this.setState({
            name: event.target.value
        });
    }

    btnClicked(){
        this.state.arr.push(this.state.name);

        this.setState({
            arr: this.state.arr
        });

        console.log(this.state.arr);

    }

    render(){
        return(
            <div>
                <input onChange={this.getInput} />
                <button
                    onClick={this.btnClicked.bind(this)}
                >
                    Click Me
                </button>
                {this.state.name}
            </div>
        );
    }


}