import React , { Component, Fragment } from 'react';
import axios from 'axios';


class InputItem extends Component 
    {

        state = {
            isEdit :false,

            text : 'Your Text :)',
            naturalNum: 5,
            decimalNum : 3.3,
            bool : false,
            date_time : '2020-10-18T11:42:13.510'
        }

        toggleEdit = () => {
            this.setState({isEdit : !this.state.isEdit});
        }

        handleChange = (e) => {
            this.setState({ [e.target.name] : e.target.value });
        }

        handleCheckbox = () => {
            this.setState({ bool:!this.state.bool });
        }

        handleSubmit = (e) => {
            e.preventDefault();
            if (this.input.value == '' )
            alert ('you should enter name of edit input')
            else
            {const dataFromInput = {...this.state}
            axios.post( 'https://react-form-builder-f9f8e.firebaseio.com/inputs.json', dataFromInput )
            .then( response => {
                this.setState( { 
                    text : '',
                    naturalNum: '',
                    decimalNum : '',
                    bool : false } );
            } )
            .catch( error => {
                console.log("error from InputItem.js",error)
            } );}
        }

        handleUpdate = (e) =>  {
            e.preventDefault();
            if (this.input.value == '' )
            alert ('you should enter name of edit input')
            else{
            this.props.editInput(this.props.index , this.input.value )
            this.toggleEdit()
            }
        }
    

        //Form Update
        updateInput= () => {
            return (
                <Fragment >
                    <input type='text' ref={(newValue) => {this.input = newValue}} defaultValue={this.props.label}></input>
                    <button className="btn btn-primary" onClick={this.handleUpdate}>Update Name</button>
                </Fragment>
            )
        }

        render (){
            let inputElement = null;

                switch ( this.props.inputType ) {
                    case ( 'text' ):
                        inputElement = <textarea className="form-control" 
                                                name="text" rows="4" 
                                                cols="50" 
                                                value={this.state.text} 
                                                id={this.props.id} 
                                                onChange={this.handleChange} 
                                                required  
                                                ref={(newValue) => {this.input = newValue}}/>
                        break;
                    
                    case ( 'naturalNum' ):
                        inputElement =  <input className="form-control" 
                                                name="naturalNum" 
                                                type='number' 
                                                placeholder='your number'  
                                                min="0" 
                                                value={this.state.naturalNum} 
                                                id={this.props.id} 
                                                onChange={this.handleChange} 
                                                required  
                                                ref={(newValue) => {this.input = newValue}}/>
                        break;
            
                    case ( 'decimalNum' ):
                        inputElement =  <input className="form-control" 
                                                name="decimalNum" 
                                                type='number' 
                                                placeholder='your number' 
                                                step="any" 
                                                value={this.state.decimalNum} 
                                                id={this.props.id} 
                                                onChange={this.handleChange} 
                                                required 
                                                ref={(newValue) => {this.input = newValue}}/>
                        break;
            
                    case ( 'bool' ):
                        inputElement =  <input className="form-control" 
                                                style={{  width: "40px",height: "40px"}} 
                                                name="bool" type='checkbox' 
                                                id={this.props.id} 
                                                checked={this.state.bool} 
                                                onChange={this.handleCheckbox} 
                                                required  
                                                ref={(newValue) => {this.input = newValue}}/>
                        break;
            
                    case ( 'Datetime' ):
                        inputElement =  <input className="form-control" 
                                                name="date_time" 
                                                type='datetime-local' 
                                                id={this.props.id} 
                                                defaultValue={this.state.date_time} 
                                                onChange={this.handleChange} 
                                                required  
                                                ref={(newValue) => {this.input = newValue}}/>
                        break;
                }
            
                return (
                    <div className="container">
                        {this.state.isEdit ? this.updateInput() :
                            <Fragment>
                                <h5 className="text-white"><label>{this.props.label}</label></h5>
                                <div className="row">
                                    <div className="col-lg-8 mb-3" >
                                        {inputElement}
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <button className="btn btn-success mr-2" type="submit" onClick={this.handleSubmit}>Send</button>
                                        <button className="btn btn-warning mr-2" onClick={() => this.toggleEdit()}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => { this.props.deleteInput(this.props.index) }} >Delete</button>
                                    </div>
                                </div>
                            </Fragment>}
                    </div>
                );
                }
        }

export default InputItem