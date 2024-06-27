//Main APP JSX

//Importing of Files, Components and Other

// eslint-disable-next-line no-unused-vars
import React from "react";

import "./App.css";

import InputBox from "./Component/InputBox";

import ControlBtn from "./Component/ControlBtn";

import TaskListBox from "./Component/TaskListBox";

import AddTaskIcon from "@mui/icons-material/AddTask";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

import TaskIcon from "@mui/icons-material/Task";

const App = () => {
    return (
        <>
            <h1 className="mainTitle">To Do App</h1>

            <div className="todoApp">
                <div className="todoControl">
                    <div className="inputControl">
                        <InputBox
                            className="inputTitle"
                            placeholder={"Add Title of New Task"}
                        />

                        <InputBox
                            className="inputDescription"
                            placeholder={"Add Description of New Task"}
                        />
                    </div>

                    <ControlBtn
                        sx={{
                            color: "var(--themeColor)",

                            "&:hover": {
                                backgroundColor: "var(--themeBGColor)",
                            },
                        }}
                        className="addBtn"
                        btnTitle={<AddTaskIcon />}
                        hoverTitle="Add Task"
                    />
                </div>

                <div className="todoCategory">
                    <ControlBtn
                        sx={{
                            color: "var(--themeColor)",

                            "&:hover": {
                                backgroundColor: "var(--themeBGColor)",
                            },
                        }}
                        className="todoBtn"
                        btnTitle={<AssignmentOutlinedIcon />}
                        hoverTitle="Task To Do"
                    />

                    <ControlBtn
                        sx={{
                            color: "var(--themeColor)",

                            "&:hover": {
                                backgroundColor: "var(--themeBGColor)",
                            },
                        }}
                        className="completedBtn"
                        btnTitle={<TaskIcon />}
                        hoverTitle="Task Completed"
                    />
                </div>

                <TaskListBox />
            </div>
        </>
    );
};

export default App;
