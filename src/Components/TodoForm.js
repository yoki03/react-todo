import React, {useState} from 'react'

function TodoForm({addTask}) {

    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    }

    const handleChange = e => {
        setTask(e.target.value);
    }

  return (
    <div>
        <form className='input-group mb-3' onSubmit={handleSubmit}>
                <input 
                name='task' 
                type="text" 
                value={task}
                placeholder='write your tasks' 
                className='col-9'
                onChange={handleChange}
                />
            
                <button 
                className='btn btn-primary col-3'
                >add</button>
        </form>
    </div>
  )
}

export default TodoForm