import React, { useState } from "react";
import {
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
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
    setFormData("");
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
