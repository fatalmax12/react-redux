import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatus } from '../store/todoSlice'

function TodoItem(props) {
  const dispatch = useDispatch();


  return (
    <>
      <li key={props.id}>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={() => dispatch(toggleStatus(props.id))}
        />
        <span>{props.title}</span>
        <span className="delete" onClick={() => dispatch(deleteTodo(props.id))}>
          &times;
        </span>
      </li>
    </>
  );
}

export default TodoItem;
