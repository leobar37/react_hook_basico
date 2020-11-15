import { Button, ListGroup } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import "./ListTodo.scss";
import { useState } from "react";

const Item = ({ todo, deleteTodo, todoEdit }) => {
  const [edit, setEdit] = useState(true);

  const [todoinput, setTodoInput] = useState(todo.name);

  const updateTodo = () => {
    setEdit(!edit);
    if (!edit && todoinput) {
      todoEdit(todo.id, { ...todo, name: todoinput });
    }
  };

  return (
    <div className="item_list">
      <div>
        <span style={{ display: edit ? "block" : "none" }}>{todo.name}</span>
        <input
          style={{ display: edit ? "none" : "block" }}
          type="text"
          className="form-control"
          value={todoinput}
          onChange={(ev) => setTodoInput(ev.target.value)}
        />
      </div>
      <div className="buttons">
        <Button onClick={() => updateTodo()}>
          <FontAwesomeIcon icon={edit ? faEdit : faSave} />
        </Button>
        <Button variant="success" onClick={(ev) => deleteTodo(todo.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

function ListTodo({ todos, deleteTodo, editTodo }) {
  return (
    <div>
      <ListGroup>
        {todos.map((todo, i) => (
          <ListGroup.Item key={i} className="">
            <Item todo={todo} deleteTodo={deleteTodo} todoEdit={editTodo} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ListTodo;
