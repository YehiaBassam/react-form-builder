import React, { Component } from 'react';

class AddForm extends Component {

    state = {
            form_name: '',
            label: '',
            type: 'text'
            }

    handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
}

    handleSubmit = (e) => {
        const regexExp = /(?=.*[a-zA-Z])/

        e.preventDefault();
        if (this.state.label.trim() === '' || this.state.form_name.trim() === '')
        alert('you should enter your form name and your label');

        else if (!(this.state.form_name.match(regexExp)))     
        alert('form name should contain english letters');

        else{
        this.props.addInput(this.state);
        this.setState({
                label : ''
        });}
    }


    render (){ 
        const { form_name, label } = this.state;
        const isEnabled = form_name.length > 0 && label.length > 0;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="text-white">Form Name</label>
                        <input  type="text"
                                className="form-control"
                                name="form_name"
                                placeholder="...form 1"
                                onChange={this.handleChange}
                                value={this.state.form_name}
                                required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="text-white">Input Name</label>
                        <input  type="text"
                                className="form-control"
                                name="label"
                                placeholder="...my input"
                                onChange={this.handleChange}
                                value={this.state.label}
                                required/>
                    </div>

                    <label className="text-white">input type</label>
                    <select className="form-control"
                            name="type" 
                            defaultValue="text" 
                            onChange={this.handleChange}>
                        <option value="text">text</option>
                        <option value="naturalNum">natural numbers</option>
                        <option value="decimalNum">decimal numbers</option>
                        <option value="bool">true/false</option>
                        <option value="Datetime">Datetime picker</option>
                    </select>
                    <button type="submit" disabled={!isEnabled} className="btn btn-success mt-4">Add Input</button>
                </form>
            </div>
        )
    }
}

export default AddForm