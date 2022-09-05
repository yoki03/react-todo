import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {getTodos, setTodos} from "./Services/services.js";
import Messages from './Messages';


function ToDo() {
    const [tasks, setTasks] = useState(getTodos());
    const [popup, setPopup] = useState({flag: false, val: ''})
    
    useEffect(()=>{   
        setTodos(tasks);
    },[tasks])

    const closePopup = () => {
        setTimeout(() => {
          setPopup({flag: false, val: ''});
        },2000)
    }

    const addTask = (task) => {
        task = task.trim();
        if (!task || /^\s*$/.test(task)) {
            return;
        }else if (tasks.find((t) => t.text === task)){
            setPopup({flag: true, val: `following task already exist : ${task}`});
            closePopup();
            return;
        }
        setPopup({flag: true, val: `Added the following task : ${task}`});
        closePopup();
        setTasks([...tasks, { id: new Date().getTime().toString(), text: task}]);
    }

    const handleDelete = (task)=>{
            const deleted = tasks.filter((t)=>t.id !== task.id);
            setTasks(deleted);
            setPopup({flag: true, val: `Completed the following task : ${task.text}`});
            closePopup();
    }

    const handleClear=()=>{
        setTasks([]);
        setPopup({flag: true, val: `You are done for the day!`});
        closePopup();
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
                (!tasks.length)? "no tasks": ((tasks.length === 1) ? "one task" : ((tasks.length >1) ? `${tasks.length} tasks`: null))
            }
        </div>

        <TodoList tasks={tasks} handleDelete={handleDelete}/>
        
        {
            !tasks.length ? null:(
                <div>
                    <button className= "btn btn-secondary  mt-4 mb-4" onClick={()=>handleClear()}>
                       Done for the day
                    </button>
                </div>
        )}
        
        <Messages popup={popup.flag} msg={popup.val}></Messages>
    </div>
  )
}

export default ToDo