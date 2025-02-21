import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(index)}
        >
          <span>{todo.text}</span>
          <button className='clear-button' onClick={(e) => { e.stopPropagation(); removeTodo(index); }}>✖️</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;