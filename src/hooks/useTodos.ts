import { useState, useEffect } from 'react';
import type { Todo, FilterType } from '@/types';

const STORAGE_KEY = 'todo-app-items';

function loadFromStorage(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Todo[];
  } catch (e: any) {
    console.error('Failed to load todos:', e.message);
  }
  return [];
}

function saveToStorage(todos: Todo[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e: any) {
    console.error('Failed to save todos:', e.message);
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadFromStorage);
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    saveToStorage(todos);
  }, [todos]);

  function addTodo(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmed,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos(prev => [newTodo, ...prev]);
  }

  function toggleTodo(id: string): void {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id: string): void {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  function clearCompleted(): void {
    setTodos(prev => prev.filter(t => !t.completed));
  }

  const filtered: Todo[] = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return {
    todos: filtered,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
  };
}
