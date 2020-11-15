import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import FormTodo from "../componets/Form";
import ListTodo from "../componets/ListTod";
import { TodoApi } from "../services/todoapi";
import "./todo.scss";
function Todo() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    let todos = TodoApi.addTodo(todo);
    setTodos(todos);
  };
  const newTodos = useCallback(() => TodoApi.getTodos(), [todos]);
  useEffect(() => {
    setTodos(newTodos());
  }, [todos.length]);
  const deleteTodo = (id) => {
    setTodos(TodoApi.removeTodo(id));
  };

  const editTodo = (id, todo) => {
    console.log("for edit");
    setTodos(TodoApi.updateTodo(id, todo));
  };
  return (
    <div>
      <Container className="">
        <div className="container_todo">
          <FormTodo addTodo={addTodo} />
          <ListTodo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
      </Container>
    </div>
  );
}

export default Todo;
