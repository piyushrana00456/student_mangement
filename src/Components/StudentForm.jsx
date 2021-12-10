import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import {
  registerError,
  registerLoading,
  registerSuccess,
} from "../Redux/action";
import styles from "./StudentForm.module.css";

const initState = {
  first_name: "",
  last_name: "",
  city: "",
  age: "",
  education: "",
  gender: "",
  contact: "",
};

export const StudentForm = () => {
  const [formData, setFormData] = useState(initState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleCreate(formData);
    setFormData("");
  };

  const handleCreate = async (e) => {
    dispatch(registerLoading());
    console.log("studentData:", e);
    try {
      await axios
        .post("http://localhost:4000/student", {
          first_name: e.first_name,
          last_name: e.last_name,
          city: e.city,
          age: e.age,
          education: e.education,
          gender: e.gender,
          contact: e.contact,
        })
        .then((res) => {
          const action = registerSuccess(res.data);
          dispatch(action);
          setFormData("");
        });
    } catch (error) {
      const action = registerError("Wrong credential");
      dispatch(action);
    }
  };

  return (
    <>
      <div>
        <Typography variant="caption" className={styles.info}>
          Enter Student Details <span style={{ color: "red" }}>*</span>
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <TextField
              label="First Name"
              name="first_name"
              type="text"
              onChange={handleChange}
              placeholder="first name"
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              name="last_name"
              type="text"
              onChange={handleChange}
              placeholder="last name"
            />
          </div>
          <div>
            <TextField
              label="City"
              name="city"
              type="text"
              onChange={handleChange}
              placeholder="city"
            />
          </div>
          <div>
            <TextField
              label="Age"
              name="age"
              type="number"
              onChange={handleChange}
              placeholder="age"
            />
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Education</InputLabel>
              <Select
                label="education"
                name="education"
                onChange={handleChange}
              >
                <MenuItem value="FT-Web-10">FT-Web-10</MenuItem>
                <MenuItem value="FT-Web-11">FT-Web-11</MenuItem>
                <MenuItem value="FT-Web-12">FT-Web-12</MenuItem>
                <MenuItem value="FT-Web-13">FT-Web-13</MenuItem>
                <MenuItem value="FT-Web-14">FT-Web-14</MenuItem>
                <MenuItem value="FT-Web-15">FT-Web-15</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="gender" name="gender" onChange={handleChange}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              label="contact"
              name="contact"
              type="text"
              placeholder="phone no.."
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
