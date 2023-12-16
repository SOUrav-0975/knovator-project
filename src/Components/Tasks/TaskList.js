import React, { useState } from "react";
import { Stack, Button } from "react-bootstrap";
import EditTask from "./EditTask";
import "../../App.css";

const TaskList = ({ tasks, handleEditTask }) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditModalShow = (task) => {
    setSelectedTask(task);
    setEditModalShow(true);
  };

  const handleEditModalClose = () => {
    setEditModalShow(false);
    setSelectedTask(null);
  };

  return (
    <div className="task-div">
      <h2 className="my-auto mx-auto px-2 py-2">Tasks</h2>
      {tasks.map((task, index) => (
        <Stack direction="horizontal" gap={3} key={index}>
          <div className="p-2">{task.title}</div>
          <div className="p-2 ">{task.description}</div>
          <div className="p-2 ms-auto ">{task.timeTracked}</div>
          <div className="vr" />
          <div className="p-2">
            {" "}
            <Button
              variant="warning"
              className="justify-content-right edit-button"
              onClick={() => handleEditModalShow(task)}
            >
              Edit
            </Button>
          </div>
        </Stack>
      ))}

      {selectedTask && (
        <EditTask
          show={editModalShow}
          handleClose={handleEditModalClose}
          task={selectedTask}
          handleSaveEdit={handleEditTask}
        />
      )}
    </div>
  );
};

export default TaskList;
