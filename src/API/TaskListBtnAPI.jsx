import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";

import TaskAltIcon from "@mui/icons-material/TaskAlt";

const TaskListBtnAPI = [
    {
        id: 1,

        color: "var(--themeColor) ",

        bgColor: "var(--themeBGColor)",

        btnTitle: <EditIcon />,

        hoverTitle: "Edit Task",
    },

    {
        id: 2,

        color: "var(--deleteColor) ",

        bgColor: "var(--deleteBGColor)",

        btnTitle: <DeleteIcon />,

        hoverTitle: "Delete Task",
    },

    {
        id: 3,

        color: "var(--doneColor) ",

        bgColor: "var(--doneBGColor)",

        btnTitle: <TaskAltIcon />,

        hoverTitle: "Complete Task",
    },
];

export default TaskListBtnAPI;
