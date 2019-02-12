import React, { Component } from 'react';

export default class Arraypush extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: [],
            age:0,
            sex:"",
            address:""
        }
    }

    btnClicked(){
        this.state.name.push("Akash");
        this.setState({
            name: this.state.name
        });

        console.log(this.state.name);
    }

    render(){
        return(
            <div>
                <button onClick={this.btnClicked.bind(this)}>
                    Click Me
                </button>
            </div>
        );
    }
}