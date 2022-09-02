import React, {useState} from 'react';
import Modals from './Modals';


function TodoList({tasks, handleDelete}) {
  const [modpop, setModpop] = useState(false);
  const [currenttask, setCurrenttask] = useState({});

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
              onClick={() => {setModpop(true); setCurrenttask(task)}}>
                done
              </button>
            <Modals 
              modpop={modpop}
              currenttask={currenttask} 
              handleDelete={handleDelete}
              setModpop={setModpop}
              ></Modals>
              
            </div>
            ))
        }
    </div>
  )
}

export default TodoList