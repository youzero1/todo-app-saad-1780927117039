import { Trash2 } from 'lucide-react';
import clsx from 'clsx';
import type { Todo } from '@/types';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 px-4 py-3 group hover:bg-slate-50 transition-colors">
      <button
        onClick={() => onToggle(todo.id)}
        className={clsx(
          'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors',
          todo.completed
            ? 'bg-brand border-brand'
            : 'border-slate-300 hover:border-brand'
        )}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <span
        className={clsx(
          'flex-1 text-sm',
          todo.completed ? 'line-through text-slate-400' : 'text-slate-700'
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all"
        aria-label="Delete todo"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
}
