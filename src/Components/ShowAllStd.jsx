import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
export const ShowAllStd = () => {
  const [student, setStudent] = useState([]);
  console.log(student);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get("http://localhost:4000/student").then((res) => {
      console.log("data:", res.data);
      setStudent(res.data.data);
    });
  };

  const handleDelete = async (e) => {
    console.log(e.id);
    await axios.delete(`http://localhost:4000/student/${e._id}`).then((res) => {
      console.log(res.data);
    });
    fetchData();
  };

  return (
    <>
      <Wrap>
        {student?.map((e) => (
          <div className="container">
            <div>Name:{" " + e.first_name + " " + e.last_name}</div>
            <div>Class:{" " + e.education}</div>
            <div>City:{" " + e.city}</div>
            <button onClick={() => handleDelete(e)}>Delete</button>
          </div>
        ))}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 300px;
  border: 1px solid lightgray;
  margin: 30px auto;
  padding: 20px;
  overflow-y: scroll;
  & .container {
    margin-bottom: 15px;
    font-size: 18px;
    & button {
      width: 50%;
      background-color: blue;
      border-radius: 4px;
      color: white;
      border: none;
      height: 20px;
    }
    & button:hover {
      background-color: red;
    }
  }
`;
