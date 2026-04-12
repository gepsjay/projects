'use client';

import { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
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
    <div className="max-w-2xl mx-auto my-8 p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
      <h1 className="text-3xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-100">
        To-Do List
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-lg border-2 border-zinc-200 dark:border-zinc-700 bg-transparent focus:outline-none focus:border-blue-500 transition-colors text-zinc-900 dark:text-zinc-100"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTodo()}
          placeholder="Add a new to-do"
        />
        <button 
          onClick={handleAddTodo}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors active:scale-95"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-center text-zinc-500 py-4">No tasks yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              onToggle={handleToggleTodo} 
              onDelete={handleDeleteTodo} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
