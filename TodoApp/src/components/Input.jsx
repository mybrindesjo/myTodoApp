import React from 'react'

const Input = ({addTodo}) => {
    const [value, setValue] = React.useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue('')
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type='text'
            className='input'
            value={value}
            placeholder='Lägg till en ny todo...'
            onChange={e => setValue(e.target.value)}
        />
        </form>
    )
    }

export default Input