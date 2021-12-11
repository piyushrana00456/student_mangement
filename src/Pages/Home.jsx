import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const Home = () => {
  const [contest, setContest] = useState([]);
  useEffect(() => {
    fetchContest();
  }, []);

  const fetchContest = async () => {
    await axios.get("http://localhost:4000/contest").then((res) => {
      console.log(res.data);
      setContest(res.data.data);
    });
  };

  return (
    <>
      <Wrap>
        {contest?.map((e) => (
          <div className="contain">
            <p>Title:{" " + e.title}</p>
            <p>Type:{" " + e.type}</p>
            <p>Tag:{" " + e.tags}</p>
            <p>Date:{" " + e.createdAt}</p>
          </div>
        ))}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  & .contain {
    border: 1px solid lightgray;
    padding: 15px;
    margin: 15px;
  }
  & .contain:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
