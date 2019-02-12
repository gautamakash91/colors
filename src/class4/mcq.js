import React, { Component } from 'react';
import "./mcq.css";

export default class MCQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ques1: "ans1",
            // ques2: "ans2",
            // ques3: "ans3",
            score: 0,
            bg: "#ffffff"
        }
    }

    componentDidMount() {
        this.setState({
            score: 10
        })
    }

    // inputCountry=()=>{
    //     if(this.state.ques1 == "ans1" && this.state.ques2=="ans2"&& this.state.ques3=="ans3"){
    //         this.setState({
    //             score: 3
    //         })
    //     }
    // }

    render() {
        return (
            <div className="akash">
                {/* <button onClick={this.inputCountry}>Click Me</button> */}

                <h1>{this.state.score}</h1>
                <button
                    style={{ backgroundColor: this.state.bg }}
                    onClick={()=>{
                        this.setState({
                            bg: "#00ff00",
                            bg:"#ff0000"
                        },function(){
                            setInterval(()=>{
                                this.setState({
                                    bg:"#ffffff"
                                })
                            },300);
                        });
                    }}
                >
                    Hello
                </button>

            </div>
        );
    }
}