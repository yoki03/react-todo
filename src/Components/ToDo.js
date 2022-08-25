import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {getTodos, setTodos} from "./Services/services.js";

function ToDo() {
    const [tasks, setTasks] = useState(getTodos());

    useEffect(()=>{   
        setTodos(tasks);
    },[tasks])

    const addTask = (task) => {
        if (!task || /^\s*$/.test(task)) {
            return;
        }

        let copy = [...tasks];
        copy = [...copy, { id: new Date().getTime().toString(), text: task}];
        setTasks(copy);
    }


    var alerts = document.getElementById('alerts')
    function closeAlert() {
        alerts.style.display = 'none';
    }
    function showAlert(){
        let closer;
        alerts.style.display = 'block';
        closer = setTimeout(closeAlert, 2000)
    }
    const handleDelete = (task)=>{
        let text = (`Are you sure to remove ${task.text}.`);
        if (window.confirm(text) === true) {
            let timer;
            const deleted = tasks.filter((t)=>t.id !== task.id);
            setTasks(deleted);
            timer = setTimeout(showAlert,500);
        }
    }

    const handleClear=()=>{
        setTasks([]);
    }

  return (

    <div className='container row'>
        <div id= "alerts" className="alert alert-info" style={{display:'none'}}>
        <strong>One Task</strong> removed.
        </div>

        <h1 className='mt-3 text-black'>To-Do App</h1>
        <TodoForm addTask={addTask}/>
        
        <div className='badge text-black'>
            You have {
                ! tasks.length 
                ? "no tasks"
                : tasks.length === 1
                ? "one task"
                : tasks.length >1 
                ? `${tasks.length} tasks`
                : null
            }
        </div>

        <TodoList tasks={tasks} handleDelete={handleDelete}/>
        
        {
            !tasks.length ? null:(
                <div>
                    <button className= "btn btn-secondary  mt-4 mb-4" onClick={()=>handleClear()}>
                       Clear
                    </button>
                </div>
      )}
    </div>
  )
}

export default ToDo