import React, { useState } from 'react';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <>
      <section className="text-container">
        <h1>Todo-lista</h1>
        <p>Här kan du skapa en lista över saker du behöver göra.</p>
        <Input addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </section>
    </>
  );
};

export default Todo;