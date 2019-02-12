import React, { Component } from 'react';

export default class Fetcher extends Component{
    constructor(props){
        super(props);
        this.state = {
            message:""
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/login",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'yourValue',
              password: 'yourOtherValue',
            }),
          })
        .then(response => response.json())
        .then(responseJson =>{
            // console.log(responseJson);
            if(responseJson.token){
                this.setState({
                    message: "Login Successful"
                });
            }else{
                this.setState({
                    message: responseJson.error
                });
            }
        })
    }

    render(){
        return(
        <div>
            {this.state.message}
        </div>
        )
    }
}