import React from 'react'

function TodoList({tasks, handleDelete}) {
  return (
    <div>
        {
            tasks.map((task) => (
            <div key={task.id}>
              <span className = "bg-white btn mt-2"
              style={{textAlign: "left", fontWeight: "bold"}}>
                {task.text}
              </span>

              <button
              className ="mt-2 btn btn-warning material-icons"
              onClick ={()=> handleDelete(task)}>
                done
              </button>
            </div>
            ))
        }
    </div>
  )
}

export default TodoList