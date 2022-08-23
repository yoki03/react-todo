import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {Services} from "./services.js";

function ToDo() {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            //const storedList = JSON.parse(localStorage.getItem("localTasks"));
            //setTasks(storedList);
            //console.log((localStorage.getItem("localTasks")));
            this.Services.getTodos().then((res) => setTasks(res));
        }
    },[])

    const addTask = (task) => {
        let copy = [...tasks];
        copy = [...copy, { id: new Date().getTime().toString(), text: task}];
        setTasks(copy);
        localStorage.setItem("localTasks", JSON.stringify(copy))
    }

    const handleDelete = (task)=>{
        const deleted = tasks.filter((t)=>t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }

    const handleClear=()=>{
        setTasks([]);
        localStorage.removeItem("localTasks");
    }

  return (
    <div className='container row'>
        <h1 className='mt-3 text-black'>To-Do App</h1>
        <TodoForm addTask={addTask}/>
        
        <div className='badge'>
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