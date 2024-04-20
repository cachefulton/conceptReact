import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa";

function DeleteButton({
  title,
  bodyText,
  cancelText,
  confirmText,
  //   icon,
  itemKey,
  onHandleDelete
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleConfirm = () => {
    setShow(false);
    onHandleDelete(itemKey);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <span onClick={handleShow} role="button">
        <FaTrash />
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {cancelText}
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            {confirmText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
