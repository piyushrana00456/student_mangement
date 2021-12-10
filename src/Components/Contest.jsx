import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Contest.module.css";
import {
  registerError,
  registerLoading,
  registerSuccess,
} from "../Redux/action";

import axios from "axios";
const initState = {
  title: "",
  type: "",
  tags: "",
  Deadline: "",
};

export const Contest = () => {
  const [contest, setContest] = useState(initState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContest({
      ...contest,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contest);
    handleAdd(contest);
  };

  const handleAdd = async (e) => {
    dispatch(registerLoading());
    try {
      await axios
        .post("http://localhost:4000/contest", {
          title: e.title,
          type: e.type,
          tags: e.tags,
          Deadline: e.Deadline,
        })
        .then((res) => {
          const action = registerSuccess(res.data);
          dispatch(action);
        });
    } catch (error) {
      const action = registerError("Wrong Input");
      dispatch(action);
    }
  };

  return (
    <>
      <div>
        <Typography className={styles.info}>
          Enter Contest Details <span style={{ color: "red" }}>*</span>
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <TextField
              label="title"
              name="title"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select label="type" name="type" onChange={handleChange}>
                <MenuItem value="DSA">DSA</MenuItem>
                <MenuItem value="Coding">Coding</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField name="Deadline" type="date" onChange={handleChange} />
          </div>
          <div>
            <TextField
              label="tags"
              name="tags"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
