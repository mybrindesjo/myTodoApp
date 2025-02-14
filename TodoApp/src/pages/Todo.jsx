import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Confetti from 'react-confetti';

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setAllCompleted(todos.length > 0 && todos.every(todo => todo.completed));
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
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
      {allCompleted && <Confetti />}
      <section className="text-container">
        <h1>Todo-lista</h1>
        <p>Här kan du skapa en lista över saker du behöver göra.</p>
        <div className="input-container">
          <Input addTodo={addTodo} setTodos={setTodos} />
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        {allCompleted && <p className="congrats-message">Du är klar, bra kämpat!</p>}
      </section>
    </>
  );
};

export default Todo;