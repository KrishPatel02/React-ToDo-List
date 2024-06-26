// eslint-disable-next-line no-unused-vars
import React from "react";

import "./ComponentCSS/InputBox.css";

import InputBox from "./Component/InputBox";

import Buttons from "./Component/Buttons";

import TaskListBox from "./Component/TaskListBox";

import AddTaskIcon from "@mui/icons-material/AddTask";

import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

import TaskIcon from '@mui/icons-material/Task';

const App = () => {
    return (
        <>
            <InputBox className="inputTitle" placeholder={"Title"} />

            <InputBox className="inputDescription" placeholder={"Description"} />

            <Buttons className="addBtn" btnTitle={<AddTaskIcon />} />

            <Buttons className="todoBtn" btnTitle={<AssignmentOutlinedIcon />} />

            <Buttons className="completedBtn" btnTitle={<TaskIcon />} />

            <TaskListBox />
        </>
    );
};

export default App;
