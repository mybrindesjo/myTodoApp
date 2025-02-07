import React from 'react';

const Input = ({ addTodo }) => {
    const [value, setValue] = React.useState('');
    const [dueDate, setDueDate] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value || !dueDate) return;
        addTodo(value, dueDate);
        setValue('');
        setDueDate('');
    }

    return (
        <form onSubmit={handleSubmit} className='input-form'>
            <input
                type='text'
                className='input'
                value={value}
                placeholder='Lägg till en ny todo...'
                onChange={e => setValue(e.target.value)}
            />
            <input
                type='date'
                className='input'
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
            />
            <button type='submit' className='add-todo-btn'>Lägg till</button>
        </form>
    );
}

export default Input;