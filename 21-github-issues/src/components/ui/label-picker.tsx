import type { GithubLabel } from '@/types';

interface LabelPickerProps {
  labels: GithubLabel[];
  selectedLabels: string[];
  onLabelToggle: (label: string) => void;
  onClearSelectedLabels: () => void;
}

function LabelPicker({
  labels,
  selectedLabels,
  onLabelToggle,
  onClearSelectedLabels
}: LabelPickerProps) {
  return (
    <div
      className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200
      z-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white'
    >
      <div className='p-2 border-b border-gray-100 flex items-center justify-between dark:border-gray-700'>
        <h4 className='text-sm font-medium text-gray-900 dark:text-gray-100'>
          Filter by labels
        </h4>
        {selectedLabels.length > 0 && (
          <button
            onClick={onClearSelectedLabels}
            className='text-xs text-gray-500 hover:text-gray-700 underline dark:text-gray-400 dark:hover:text-gray-300'
          >
            Clear all
          </button>
        )}
      </div>
      {labels ? (
        <div className='max-h-64 overflow-y-auto'>
          {labels.map((label) => {
            const isSelected = selectedLabels.includes(label.name);
            return (
              <button
                key={label.id}
                onClick={() => onLabelToggle(label.name)}
                className={`w-full flex items-center justify-between p-2 transition-colors duration-200 hover:cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-900'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className='flex items-center space-x-2'>
                  <div
                    className='w-3 h-3 rounded-full'
                    style={{ backgroundColor: '#' + label.color }}
                  />
                  <span
                    className={`text-sm text-start ${
                      isSelected
                        ? 'text-blue-900 font-medium dark:text-white'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {label.name}
                  </span>
                </div>
                {isSelected && (
                  <div className='w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center'>
                    <span className='text-white text-xs'>✓</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : (
        <div className='p-4 w-full items-center'>
          <p className='text-gray-800 text-center dark:text-gray-100'>
            No labels found
          </p>
        </div>
      )}
    </div>
  );
}

export default LabelPicker;
