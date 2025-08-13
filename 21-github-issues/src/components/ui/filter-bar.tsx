import { useState } from 'react';
import { useLabels } from '@/hooks/useLabels';
import { ChevronDown, X } from 'lucide-react';
import { IssueState, type GitHubIssue, type IssueStateType } from '@/types';

interface Props {
  issues: GitHubIssue[];
  state: IssueStateType;
  onStateChange: React.Dispatch<React.SetStateAction<IssueStateType>>;
  selectedLabels?: string[];
  onLabelsChange?: (labels: string[]) => void;
}

function FilterBar({
  issues,
  state,
  onStateChange,
  selectedLabels = [],
  onLabelsChange,
}: Props) {
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);

  const { labels } = useLabels();

  const handleLabelToggle = (labelName: string) => {
    if (!onLabelsChange) return;

    const isSelected = selectedLabels.includes(labelName);
    if (isSelected) {
      onLabelsChange(selectedLabels.filter((name) => name !== labelName));
    } else {
      onLabelsChange([...selectedLabels, labelName]);
    }
  };

  const clearSelectedLabels = () => {
    if (onLabelsChange) {
      onLabelsChange([]);
    }
  };

  const filterOptions = [
    { value: IssueState.ALL, label: 'All', count: issues.length },
    {
      value: IssueState.OPEN,
      label: 'Open',
      count: issues.filter((issue) => issue.state === 'open').length,
    },
    {
      value: IssueState.CLOSE,
      label: 'Closed',
      count: issues.filter((issue) => issue.state === 'closed').length,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              className={`px-3 py-1.5 text-sm rounded-md font-medium border transition-colors duration-200 ${
                state === option.value
                  ? 'bg-blue-100 border-blue-400 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onStateChange(option.value)}
            >
              {option.label}
              {option.count >= 0 && (
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
            className={`flex items-center space-x-2 px-3 py-1.5 border rounded-md text-sm font-medium transition-colors duration-200 ${
              selectedLabels.length > 0
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>
              Labels
              {selectedLabels.length > 0 && (
                <span className="ml-1 text-xs">({selectedLabels.length})</span>
              )}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showLabelDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="p-2 border-b border-gray-100 flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  Filter by labels
                </h4>
                {selectedLabels.length > 0 && (
                  <button
                    onClick={clearSelectedLabels}
                    className="text-xs text-gray-500 hover:text-gray-700 underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              {labels ? (
                <div className="max-h-64 overflow-y-auto">
                  {labels.map((label) => {
                    const isSelected = selectedLabels.includes(label.name);
                    return (
                      <button
                        key={label.id}
                        onClick={() => handleLabelToggle(label.name)}
                        className={`w-full flex items-center justify-between p-2 transition-colors duration-200 hover:cursor-pointer ${
                          isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: '#' + label.color }}
                          />
                          <span
                            className={`text-sm text-start ${
                              isSelected
                                ? 'text-blue-900 font-medium'
                                : 'text-gray-900'
                            }`}
                          >
                            {label.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
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

      {selectedLabels.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-sm text-gray-600 mr-2">Active filters:</span>
          {selectedLabels.map((labelName) => {
            const label = labels?.find((l) => l.name === labelName);
            return (
              <span
                key={labelName}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-gray-50"
              >
                {label && (
                  <div
                    className="w-2 h-2 rounded-full mr-1.5"
                    style={{ backgroundColor: '#' + label.color }}
                  />
                )}
                {labelName}
                <button
                  onClick={() => handleLabelToggle(labelName)}
                  className="ml-1.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterBar;
