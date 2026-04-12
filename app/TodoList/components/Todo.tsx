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
    <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
      <input
        type="checkbox"
        className="w-5 h-5 cursor-pointer rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`flex-1 text-lg transition-all ${todo.done ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-zinc-100'}`}>
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="group-hover:opacity-100 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-all"
      >
        Delete
      </button>
    </div>
  );
}
