import React, { Component } from 'react';

export default class Colr extends Component{
    constructor(props){
        super(props);
        this.state = {
            bg:"#ffffff"
        }
    }
    render(){
        return(
            <div style={{backgroundColor: this.state.bg}}>

            </div>
        );
    }
}