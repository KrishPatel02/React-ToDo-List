// Task List JSX

// Importing of Files, Components and Others

// eslint-disable-next-line no-unused-vars
import React from "react";

import "../ComponentCSS/TaskList.css";

import { ListItem, ListItemText } from "@mui/material";

import ListBtn from "../Component/ListBtn";

// TaskList Function

const TaskList = () => {
    return (
        <>
            {/* Task Lists Elements */}

            <ListItem className="taskList">
                <ListItemText
                    primary="Title of Tasks"
                    secondary="Description of Tasks"
                />

                <ListBtn />
            </ListItem>
        </>
    );
};

export default TaskList;
