// eslint-disable-next-line no-unused-vars
import React from "react";

import TaskList from "./TaskList";

import { List } from "@mui/material";

const TaskListBox = () => {
  return (
    <>
      <List>
        <TaskList />
      </List>
    </>
  );
};

export default TaskListBox;
