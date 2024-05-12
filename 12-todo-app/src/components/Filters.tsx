import { useTodoStore } from '../store';
import { FilterType } from '../types';

const FILTERS = ['all', 'active', 'completed'] as const;

function Filters() {
  const { setFilter } = useTodoStore();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const filter = e.currentTarget.id;
    setFilter(filter as FilterType);
  };

  return (
    <ul className="filters">
      {FILTERS.map((filter) => {
        return (
          <li key={filter}>
            <a href={`#${filter}`} id={filter} onClick={handleClick}>
              {filter}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Filters;
