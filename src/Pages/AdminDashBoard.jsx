import React, { useState } from "react";
import styled from "styled-components";
import { ShowAllStd } from "../Components/ShowAllStd";
import { StudentForm } from "../Components/StudentForm";
import { Contest } from "../Components/Contest";

const Div = styled.div`
  min-width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-evenly;

  & div {
    border: 1px solid lightblue;
    width: 33%;
    text-align: center;
    & p {
      padding: 7px;
      margin: 0;
      vertical-align: middle;
      cursor: pointer;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  & div {
  }
`;
export const AdminDashBoard = () => {
  const [stdForm, setStdForm] = useState(false);

  const handleStdFrm = () => {
    setStdForm(true);
  };

  const handleContest = () => {
    setStdForm(false);
  };

  return (
    <>
      <Div>
        <div onClick={handleStdFrm}>
          <p>Add New Student</p>{" "}
        </div>
        <div onClick={handleContest}>
          <p>Add New Contest</p>
        </div>
      </Div>
      <Wrap>
        <div>
          <ShowAllStd />
        </div>
        <div>{stdForm ? <StudentForm /> : <Contest />}</div>
      </Wrap>
    </>
  );
};
