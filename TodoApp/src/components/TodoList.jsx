import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <div className={`todo ${todo.completed ? 'completed' : ''}`} key={index}>
          <span>{todo.text}</span>
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <button onClick={() => removeTodo(index)} className="remove-todo-btn">
              &#10006;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;