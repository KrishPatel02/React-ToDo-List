// eslint-disable-next-line no-unused-vars
import React from "react";

import Button from "@mui/material/Button";

import { Tooltip } from "@mui/material";

import TaskListBtnAPI from "../API/TaskListBtnAPI";

const ListBtn = () => {
    return (
        <>
            {TaskListBtnAPI.map((btns, index) => {
                return (
                    <>
                        <Tooltip title={btns.hoverTitle} key={index}>
                            <Button
                                variant="text"
                                className="button"
                                sx={{
                                    color: `${btns.color} `,

                                    "&:hover": {
                                        backgroundColor: `${btns.bgColor} `,
                                    },
                                }}
                            >
                                {btns.btnTitle}
                            </Button>
                        </Tooltip>
                    </>
                );
            })}
        </>
    );
};

export default ListBtn;
