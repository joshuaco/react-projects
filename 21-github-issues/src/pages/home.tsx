import { useIssues } from '@/hooks/useIssues';
import IssueList from '@/components/issue-list';
import FilterBar from '@/components/ui/filter-bar';
import SearchBar from '@/components/ui/search-bar';

function Home() {
  const { issues } = useIssues();

  return (
    <>
      <SearchBar />
      {issues && <FilterBar />}
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
        {issues ? <IssueList issues={issues} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default Home;
