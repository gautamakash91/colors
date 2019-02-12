import React, { Component } from 'react';

export default class Comp1 extends Component{
     
    render(){
        var y = false;
        var btn = "";
        if(y){
            btn= <button>Login</button>;
        }else{
            btn= <button>Logout</button>;
        }
        

        return(
            <div>
                <h1>Hello World..!!</h1>
                <p>{this.props.x}</p>
            </div>
        );
    }
}

