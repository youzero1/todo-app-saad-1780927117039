import clsx from 'clsx';
import type { FilterType } from '@/types';

type TodoFooterProps = {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
};

const FILTERS: FilterType[] = ['all', 'active', 'completed'];

export default function TodoFooter({
  filter,
  setFilter,
  activeCount,
  completedCount,
  onClearCompleted,
}: TodoFooterProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
      <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>

      <div className="flex items-center gap-1">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={clsx(
              'px-2.5 py-1 rounded-lg capitalize transition-colors',
              filter === f
                ? 'bg-brand text-white'
                : 'hover:bg-slate-200 text-slate-500'
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="disabled:opacity-30 hover:text-red-500 transition-colors"
      >
        Clear done
      </button>
    </div>
  );
}
