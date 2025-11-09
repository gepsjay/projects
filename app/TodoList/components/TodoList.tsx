'use client';

import { useState } from 'react';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Next.js', done: false },
    { id: 2, text: 'Build a to-do app', done: true },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
          placeholder="Add a new to-do"
          style={{ flexGrow: 1, padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '8px 12px' }}>Add</button>
      </div>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        ))}
      </div>
    </div>
  );
}
