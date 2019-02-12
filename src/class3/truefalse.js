import React, { Component } from 'react';

export default class TrueFalse extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: ""
        }
    }

    isTrue = () =>{
        this.setState({
            message:"Your answer is correct"
        })
    }

    isFalse = () =>{
        this.setState({
            message:"Your answer is wrong"
        })
    }

    checkValue(event){
        console.log(event.target.value);
    }


    render(){
        return(
            <div>
                <input name="phone" value="vivo" type="radio" onChange={this.checkValue}/> Vivo
                <input name="phone" value="oppo" type="radio"/> Oppo
                <input name="phone" value="samsung" type="radio"/> Samsung
                <input name="phone" value="apple" type="radio"/> Apple

                <button
                    
                >
                    Check
                </button>
            </div>
        )
    }
}