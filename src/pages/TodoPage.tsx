import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';

export default function TodoPage() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl font-bold text-brand mb-2 tracking-tight">todos</h1>
      <p className="text-slate-400 text-sm mb-8">Stay organised, get things done.</p>

      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <TodoInput onAdd={addTodo} />
          {todos.length > 0 ? (
            <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
          ) : (
            <div className="py-12 text-center text-slate-400 text-sm">
              {filter === 'all' ? 'No todos yet — add one above!' : `No ${filter} todos.`}
            </div>
          )}
          <TodoFooter
            filter={filter}
            setFilter={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            onClearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
}
