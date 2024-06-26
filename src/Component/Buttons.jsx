/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import Button from "@mui/material/Button";

const Buttons = (props) => {
    return (
        <>
            <Button variant="text" className={`button ${props.className} `}>
                {props.btnTitle}
            </Button>
        </>
    );
};

export default Buttons;
