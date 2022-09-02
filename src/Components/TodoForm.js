import React from 'react';

function TodoForm({addTask}) {

      const getValueInput = () =>{
        const task = document.getElementById("CurrentTask").value; 
        addTask(task);
        document.getElementById("CurrentTask").value = '';
      }

  return (<>
    <div>
        <div className='input-group mb-3'>
                <input 
                name='task' 
                id='CurrentTask'
                type="text" 
                placeholder='write your tasks' 
                className='col-9'
                />
                <button 
                className='btn btn-primary col-3'
                onClick={() => getValueInput()}
                >add</button>
        </div>
    </div>

    </>
  )
}

export default TodoForm