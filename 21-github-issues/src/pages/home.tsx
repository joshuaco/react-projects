import { useState, useMemo } from 'react';
import { useIssues } from '@/hooks/useIssues';
import IssueList from '@/components/issue-list';
import FilterBar from '@/components/ui/filter-bar';
import SearchBar from '@/components/ui/search-bar';
import { IssueState, type IssueStateType } from '@/types';

function Home() {
  const [state, setState] = useState<IssueStateType>(IssueState.ALL);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issues } = useIssues({
    state: state
  });

  // Filter issues by selected labels
  const filteredIssues = useMemo(() => {
    if (!issues || selectedLabels.length === 0) {
      return issues;
    }

    return issues.filter((issue) => {
      // Issue must have at least one of the selected labels
      return issue.labels.some((label) => selectedLabels.includes(label.name));
    });
  }, [issues, selectedLabels]);

  return (
    <>
      <SearchBar />
      {issues && (
        <FilterBar
          issues={issues}
          state={state}
          onStateChange={setState}
          selectedLabels={selectedLabels}
          onLabelsChange={setSelectedLabels}
        />
      )}
      <div className='bg-white rounded-lg p-4 border-2 dark:border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        {filteredIssues ? <IssueList issues={filteredIssues} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default Home;
