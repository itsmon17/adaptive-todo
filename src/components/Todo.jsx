import React, { useRef, useState } from "react";

import { Button, TextField, styled } from "@mui/material";

const Todo = () => {
  const [input, setInput] = useState("");
  const [addTodoArray, setAddTodo] = useState([]);
  const internalllPointerVariable = (event) => {
    setInput(event.target.value);
  };
  console.log(addTodoArray);
  const functionTodoAdd = () => {
    console.log(input);
    const objectNewTodo = {
      input,
      id: Date.now().toString(),
    };
    const nameAgeData = [...addTodoArray];
    nameAgeData.push(objectNewTodo);
    setAddTodo(nameAgeData);
  };
  return (
    <>
      <CreateDiv>
        <TextField
          label={"todo"}
          onChange={internalllPointerVariable}
          value={input}
        />
        <Button
          variant="contained"
          sx={{ letterSpacing: "40px", fontWeight: 800, fontSize: "1.2rem" }}
          onClick={functionTodoAdd}
        >
          ADD
        </Button>
      </CreateDiv>
      <ul>
        {addTodoArray.map((elem) => {
          return <li key={elem.id}>{elem.input}</li>;
        })}
      </ul>
    </>
  );
};

export default Todo;

const CreateDiv = styled("div")(() => ({
  width: "60%",
  margin: "0 auto",
  marginTop: "2%",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
