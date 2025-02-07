import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [allCompleted, setAllCompleted] = useState(false);

  const addTodo = (text, dueDate) => {
    const newTodos = [...todos, { text, dueDate, completed: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    setAllCompleted(todos.length > 0 && todos.every(todo => todo.completed));
  }, [todos]);

  const sortedTodos = todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  return (
    <>
      <section className={`text-container ${allCompleted ? 'all-completed' : ''}`}>
        <h1>Todo-lista</h1>
        <p>Här kan du skapa en lista över saker du behöver göra.</p>
        <Input addTodo={addTodo} />
        <div className='todo-list'>
          {sortedTodos.map((todo, index) => (
            <div className={`todo ${todo.completed ? 'completed' : ''}`} key={index}>
              <span>{todo.text} - {new Date(todo.dueDate).toLocaleDateString()}</span>
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
        <div className='todo-summary'>
          {todos.length} todos, {todos.filter(todo => todo.completed).length} completed
        </div>
      </section>
    </>
  );
};

export default Todo;