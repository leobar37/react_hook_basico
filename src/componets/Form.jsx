import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
function FormTodo({ addTodo }) {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          value={todo}
          onChange={(ev) => setTodo(ev.target.value)}
          placeholder="Enter todo"
        ></Form.Control>
        <Button
          variant="primary"
          onClick={() => addTodo({ name: todo })}
          className="my-2"
        >
          add
        </Button>
      </Form>
    </div>
  );
}

export default FormTodo;
