import React, { useState } from 'react';

function Form(props){
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
    return(
        <from onSubmit={handleSubmit}>
        <h2 className="lable-wrapper">
          <label htmlFor='new-todo-input' className='label__lg'>
            What needs to be done?
          </label>
        </h2>
        <input 
          type='text'
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete='off'
          value={name}
          onChange={handleChange}
        />
        <input type='submit' className='btn btn-primary btn-lg' value="Submit" />Add
      </from>
    );
}

export default Form