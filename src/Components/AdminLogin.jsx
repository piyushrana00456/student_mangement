import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import { loginLoading, loginSuccess, loginError } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const history = useNavigate();
  console.log(auth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(login);
    e.preventDefault();
    handleLogin(login);
  };

  const handleLogin = async (e) => {
    try {
      dispatch(loginLoading());
      await axios
        .get("http://localhost:4000/admin-login", {
          email: e.email,
          password: e.password,
        })
        .then((res) => {
          const action = loginSuccess(res.data);
          console.log("admin:", res.data);
          dispatch(action);
          localStorage.setItem("admin", JSON.stringify(res.data));
          history("/admin-dashboard");
        });
    } catch (error) {
      const action = loginError("Wrong credrntials");
      dispatch(action);
    }
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
              name="email"
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
