import { useState } from 'react';
import { Plus } from 'lucide-react';

type TodoInputProps = {
  onAdd: (text: string) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onAdd(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-b border-slate-100">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-transparent text-slate-700 placeholder-slate-400 outline-none text-base py-1"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand text-white disabled:opacity-40 hover:bg-brand-dark transition-colors"
      >
        <Plus size={18} />
      </button>
    </form>
  );
}
