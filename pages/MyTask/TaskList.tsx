import React, { useEffect } from "react";
import styled from "styled-components";
import TaskCard from "@/src/Common/TaskCard";

const TaskList = ({ status, data, onDelete}: any) => {
  console.log(data);
  return (
    <TaskListContainer>

      <TaskListTitle>
        {status === "all" && <h1>전체 할 일</h1>}
        {status === "importance" && <h1>중요한 일</h1>}
        {status === "end" && <h1>완료된 일</h1>}
      </TaskListTitle>

      <TaskCardContainer>
        {data.map((items: any) => (
          <TaskCard key={items.id} data={items} onDelete={onDelete}/>
        ))}
      </TaskCardContainer>

    </TaskListContainer>
  );
};

const TaskListContainer = styled.div`
  width: 25vw;
  height: 80vh;

  background-color: grey;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`;

const TaskListTitle = styled.div`
  color: #0e0e0e;

  padding: 2em;
`;

const TaskCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default TaskList;
