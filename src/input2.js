import React, { Component } from 'react';

class Myinput extends React.Component{
    constructor(props) {
        super(props)
        this.state ={name : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        
    }

    handleChange(event){
        this.setState({name : event.target.value});

    }
    handleSubmit(event){
        document.getElementById('demo').innerHTML = "The submitted name is " + this.state.name;
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User Name :
                        <input type='text' value={this.state.name} onChange={this.handleChange} />
                        <input type='submit' value="Submit"/>
                        <div id='demo'></div>
                    </label>
                </form>
                
            </div>
        );
    }
}

export default Myinput