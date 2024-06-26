/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { TextField } from "@mui/material";

const InputBox = (props) => {
  return (
    <>
      <TextField
        id="filled-basic"
        label={props.placeholder}
        variant="standard"
        className={`inputField ${props.className}`}
      />
    </>
  );
};

export default InputBox;
