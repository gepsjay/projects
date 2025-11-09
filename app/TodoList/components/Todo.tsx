'use client';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function Todo({ todo, onToggle, onDelete }: TodoProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: '8px' }}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none', flexGrow: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '8px' }}>Delete</button>
    </div>
  );
}
