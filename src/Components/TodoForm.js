import React from 'react'

function TodoForm({addTask}) {
      
      const getValueInput = () =>{
        const task = document.getElementById("CurrentTask").value; 
        addTask(task);
      }

  return (
    <div>
        <form className='input-group mb-3' onSubmit={getValueInput}>
                <input 
                name='task' 
                id='CurrentTask'
                type="text" 
                placeholder='write your tasks' 
                className='col-9'
                />
                <button 
                className='btn btn-primary col-3'
                >add</button>
        </form>
    </div>
  )
}

export default TodoForm