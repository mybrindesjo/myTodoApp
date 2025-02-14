import React, { useState } from 'react';

const Input = ({ addTodo, setTodos }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Lägg till en ny todo"
      />
      <button className="add-button">Lägg till</button>
      <button onClick={clearTodos} className="clear-button">Ta bort alla</button>
    </form>
  );
};

export default Input;