// eslint-disable-next-line no-unused-vars
import React from "react";

import TaskList from "./TaskList";

import "../ComponentCSS/TaskListBox.css";

import { List } from "@mui/material";

const TaskListBox = () => {
  return (
    <>
      <List className="taskListBox">
        <TaskList />
      </List>
    </>
  );
};

export default TaskListBox;
