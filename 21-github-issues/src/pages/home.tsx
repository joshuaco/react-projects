import IssueList from '@/components/issue-list';
import FilterBar from '@/components/ui/filter-bar';
import SearchBar from '@/components/ui/search-bar';

function Home() {
  return (
    <>
      <SearchBar />
      <FilterBar />
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
        <IssueList />
      </div>
    </>
  );
}

export default Home;
