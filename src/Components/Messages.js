import React from 'react';
import {Modal} from 'react-bootstrap';

function Messages({popup, msg}) {
  return (
    <div>
        <Modal show={popup}>
            <Modal.Body>
                <p>{msg}</p>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default Messages