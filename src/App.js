import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Todo from './component/Todo'
import Form from './component/Form'
import FilterButton from './component/Button';
import React, { useState } from 'react';
import { nanoid, nonoid } from "nanoid";
import Myinput from './input2';



function App(props){

  const [tasks, setTasks] = useState(props.tasks)

  function addTask(name){
    const newTask = {id : "todo-" + nanoid(), name: name, completed:false};
    setTasks([...tasks, newTask])
  }
  const taskList = tasks.map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );

 
  return(
    <div className="todoapp stack-large">
      <h1>TodoMatics</h1>
      <Form addTask={addTask}/>
      <div className="filter btn-group stack-exception">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">3 Tasks remaning</h2>
      <ul role='list' className='todo-list stack-large stack-exception' aria-labelledby='list-heading'>
        {taskList}
        <li><a href="https://youtu.be/fG8nF53ceQc" style={{color:'black'}}>Click me</a></li>
      </ul>
      <Myinput/>

    </div>
  )

}


export default App