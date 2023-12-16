import React, { useState, useRef } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import TaskModal from "../Tasks/TaskModal";
import TaskList from "../Tasks/TaskList";
import FormatTime from "./FormatTime";
const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const saveTask = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveTask = (task) => {
    const newTask = {
      title: task.title,
      description: task.description,
      timeTracked: <FormatTime seconds={time} />,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowModal(false);
  };

  const handleEditTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === selectedTask ? { ...task, ...editedTask } : task
      )
    );
    setSelectedTask(null);
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">
            <FormatTime seconds={time} />
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs="auto">
          <Button variant="success " onClick={startTimer} disabled={isRunning}>
            Start
          </Button>{" "}
          <Button variant="warning" onClick={pauseTimer} disabled={!isRunning}>
            Pause
          </Button>{" "}
          <Button variant="primary" onClick={saveTask}>
            Save
          </Button>
        </Col>
      </Row>
      <TaskModal
        show={showModal}
        handleClose={handleModalClose}
        handleSaveTask={handleSaveTask}
        selectedTask={selectedTask}
      />
      <Row className="justify-content-center">
        <Col>
          <TaskList
            tasks={tasks}
            handleEditTask={handleEditTask}
            setSelectedTask={setSelectedTask}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Timer;
