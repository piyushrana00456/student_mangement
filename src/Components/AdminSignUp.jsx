import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const From = styled.form`
  width: 50%;
  margin: 150px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & > div:nth-of-type(1) {
    width: 40%;
    margin-bottom: 20px;
  }
  & > div:nth-of-type(2) {
    width: 40%;
    margin-bottom: 20px;
  }
  & > div:nth-of-type(3) {
    width: 40%;
    margin-bottom: 20px;
  }
  & > div:nth-of-type(4) {
    width: 40%;
    margin-bottom: 20px;
  }
  & > div > * {
    width: 100%;
  }
  & > div:nth-of-type(5) {
    width: 50%;

    & input {
      width: 100%;
      height: 3.7rem;
      background-color: blue;
      color: white;
      font-size: 16px;
      border-radius: 4px;
      border: none;
    }
  }
`;

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};
export const AdminSignUp = () => {
  const [signup, setSignup] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signup);
  };

  return (
    <>
      <From onSubmit={handleSubmit}>
        <div>
          <TextField
            name="first_name"
            type="text"
            placeholder="first name"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="last_name"
            type="text"
            placeholder="last name"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </From>
    </>
  );
};
