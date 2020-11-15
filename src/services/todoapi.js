import { v4 as uuid } from "uuid";
export class TodoApi {
  static addTodo() {}
  static addTodos(arr) {
    if (!arr) return;
    localStorage.setItem("todos", JSON.stringify(arr));
  }
  static getTodos() {
    let todos = [];
    if (localStorage.getItem("todos")) {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  }
  static addTodo(todo) {
    let todos = this.getTodos();
    todo.id = uuid();
    todos.push(todo);
    this.addTodos(todos);

    return todos;
  }
  static removeTodo(idEdit) {
    let todos = this.getTodos();
    todos = todos.filter(({ id }) => idEdit != id);
    this.addTodos(todos);
    return todos;
  }
  static updateTodo(idU, todo) {
    let todos = this.getTodos();

    const indice = todos.findIndex(({ id }) => id == idU);
    console.log(indice);
    if (indice >= 0) {
      todos.splice(indice, 1, todo);

      this.addTodos(todos);
    }
    return todos;
  }
}
