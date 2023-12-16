// src/components/EditTaskModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTask = ({ show, handleClose, task, handleSaveEdit }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    handleSaveEdit({ ...task, description: editedDescription });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTaskDescription">
            <Form.Label>Edit Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Edit task description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTask;
