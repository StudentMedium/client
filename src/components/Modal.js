import React, {useState} from 'react'
import { Button, Modal} from "react-bootstrap"


export default (props) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <div>
      <Button variant="outline-success" onClick={handleShow} className="nav-button">
        {props.buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {props.children}
      </Modal>
    </div>
)}