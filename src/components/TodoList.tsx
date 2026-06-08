import type { Todo } from '@/types';
import TodoItem from '@/components/TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="divide-y divide-slate-100">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
