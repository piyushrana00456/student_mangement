import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  border: 1px solid black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  & div {
    width: 8%;
    height: 40px;
    background-color: blue;
    text-align: center;
    color: white;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    & p {
      padding: 0;
      margin-top: 8px;
      white-space: nowrap;
    }
  }
  & :nth-of-type(1) {
    margin-right: 5%;
  }
  & :nth-of-type(2) {
    margin-right: 3%;
  }
`;

export const NavBar = () => {
  return (
    <>
      <Nav>
        <div>
          <p>Home</p>
        </div>
        <div>
          <p>Admin Login</p>
        </div>
      </Nav>
    </>
  );
};
