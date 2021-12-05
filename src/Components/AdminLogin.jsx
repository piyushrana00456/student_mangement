import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

const Div = styled.div`
  width: 40%;
  margin: auto;
  & form {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
  }

  & form > div:nth-of-type(1) > * {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 25px;
  }
  & form > div:nth-of-type(2) > * {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 25px;
  }

  & form > div:nth-of-type(3) > * {
    background-color: blue;
    color: white;
    font-size: 16px;
    height: 3.7rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 80%;
    margin-bottom: 25px;
    margin-left: 10%;
  }
`;

const initState = {
  email: "",
  password: "",
};

export const AdminLogin = () => {
  const [login, setLogin] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <>
      <Div>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="email"
              placeholder="Email"
              type="email"
              name="login"
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              label="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </Div>
    </>
  );
};
