import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from 'react-redux';

function TodoList(props) {
  const todos = useSelector(state => state.todos.todos);
  
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodoComplite={props.toggleTodoComplite}
          removeTodo={props.removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
