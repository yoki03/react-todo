import React from 'react';
import {Modal} from 'react-bootstrap';

function Modals({modpop, setModpop, currenttask, handleDelete}) {
  return (
    <div>
        <Modal show={modpop}>
            <Modal.Header><Modal.Title>Confirmation</Modal.Title></Modal.Header>
            <Modal.Body><p>Are you sure do you want to delete below task?</p><p>{currenttask.text}</p></Modal.Body>
            <Modal.Footer>
                <button 
                  type="button" 
                  class="btn btn-outline-danger"
                  onClick={() => {
                    setModpop(false)
                  }}
                  >Cancel</button>
                <button 
                  type="button" 
                  class="btn btn-outline-info"
                  onClick ={()=> {
                    handleDelete(currenttask);
                    setModpop(false);
                    }}
                  >OK</button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Modals