import { mockIssues } from '@/data/mock-data';
import { useLabels } from '@/hooks/useLabels';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const filterOptions = [
  { value: 'all' as const, label: 'All', count: mockIssues.length },
  {
    value: 'open' as const,
    label: 'Open',
    count: mockIssues.filter((issue) => issue.state === 'open').length,
  },
  {
    value: 'closed' as const,
    label: 'Closed',
    count: mockIssues.filter((issue) => issue.state === 'closed').length,
  },
];

function FilterBar() {
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);
  const { labels } = useLabels();

  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200 flex justify-between items-center">
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className="px-3 py-1.5 text-sm text-gray-700 rounded-md font-medium bg-white border 
            border-gray-200 hover:bg-gray-100"
          >
            {option.label}
            {option.count > 0 && (
              <span className="ml-1 text-xs text-gray-500">
                ({option.count})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={() => setShowLabelDropdown(!showLabelDropdown)}
          className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md 
          text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <span>Labels</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {showLabelDropdown && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow border border-gray-200">
            <div className="p-2 border-b border-gray-100">
              <h4 className="text-sm font-medium text-gray-900">
                Filter by labels
              </h4>
            </div>
            {labels ? (
              <div className="max-h-64 overflow-y-auto">
                {labels.map((label) => (
                  <button
                    key={label.id}
                    className="w-full flex items-center justify-between p-2 hover:bg-gray-100 transition-colors duration-200 hover:cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: '#' + label.color }}
                      />
                      <span className="text-sm text-gray-900 text-start">
                        {label.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 w-full items-center">
                <p className="text-gray-800 text-center">No labels found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
