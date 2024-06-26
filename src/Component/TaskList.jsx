// eslint-disable-next-line no-unused-vars
import React from "react";

import { ListItem, ListItemText } from "@mui/material";

import Buttons from "./Buttons";

import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from '@mui/icons-material/Edit';

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const TaskList = () => {
    return (
        <>
            <ListItem>
                <ListItemText
                    primary="Title of Tasks"
                    secondary="Description of Tasks"
                />
                <Buttons btnTitle={<EditIcon />} />
                <Buttons btnTitle={<DeleteIcon />} />
                <Buttons btnTitle={<DoneRoundedIcon />} />
            </ListItem>
        </>
    );
};

export default TaskList;
