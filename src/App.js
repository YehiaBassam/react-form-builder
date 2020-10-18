import React, { Component } from 'react';

import AddForm from './containers/AddForm/AddForm';
import InputItem from './containers/InputItem/InputItem';
import Header from "./components/Header/header";
import './App.css';

class App extends Component {
  state = {
    form_name :'',
    inputs: []
  }

  addInput = (input) => {
    const {inputs} = {...this.state};
    inputs.push(input);
    this.setState({
      form_name : input.form_name,
      inputs});
  }

  deleteInput = (index) => {
    const {inputs} = {...this.state};
    inputs.splice(index,1)
    this.setState({inputs})
  }

  editInput = (index , new_value) => {
    const {inputs} = {...this.state};
    const editInput = inputs[index];
    editInput.label = new_value;
    this.setState({inputs})
  }

  render (){
    const {inputs} = {...this.state};
    const inputItems = inputs.map( (input,index) => {
      return <InputItem label={input.label}
                        inputType={input.type}
                        deleteInput={this.deleteInput}
                        editInput={this.editInput}
                        index={index}
                        key={index} />
    })

    return (
      <div className="App">
        <Header/>
        <AddForm addInput={this.addInput}/>

        {/* rendring inputs */}
        {this.state.inputs.length ? <div className="container mt-5 renderInputsDiv">
          <form>
            <h1 className="text-white-50">{this.state.form_name}</h1>
            {inputItems}
          </form>
        </div> : null}
      </div>
    );
  }
}

export default App;
