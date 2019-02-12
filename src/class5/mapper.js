import React, { Component } from 'react';

export default class Mapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      names_array:[],
      index:0
    }
  }

  deleteElement(arrayIndex) {
    this.state.names_array.splice(arrayIndex, 1);
    this.setState({
      names_array: this.state.names_array
    });
  }

  getInput(e){
    this.setState({
      name: e.target.value
    })
  }

  addNameToArray(){
    this.state.names_array.push({ id: this.state.index, name: this.state.name});
    this.setState({
      names_array: this.state.names_array,
      index: this.state.index + 1
    });
  }


  render() {
    return (
      <div>
        <input onChange = {this.getInput.bind(this)} />
        <button
          onClick={this.addNameToArray.bind(this)}
        >Add</button>
        <ol>
          {this.state.names_array.map((single) => (
            <li>
              {single.name}
              <button
                onClick={this.deleteElement.bind(this,single.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }

}