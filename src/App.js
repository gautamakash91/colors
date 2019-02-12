import React, { Component } from 'react';
import Comp1 from './folder/comp1';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: []
    }
  }

  getinput(event){

    // console.log(event.target.value);
    // name = event.target.value;
    this.setState({
      name:event.target.value
    });
  }

  btnClicked(){
    this.state.name.push("Akash");
    this.setState({
      name: this.state.name
    });
    console.log(this.state.name);
  }


  render() {
    return (
      <div>
          {/* <input type="text" onChange={this.getinput.bind(this)} /> */}
          
          <button
            onClick={this.btnClicked.bind(this)}
          >
            Click Me
          </button>
          {/* <Comp1 x={2} /> */}

          {this.state.name}

      </div>
    );
  }
}

export default App;
