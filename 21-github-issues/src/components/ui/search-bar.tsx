import { Search } from 'lucide-react';

function SearchBar() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter repository (e.g., facebook/react)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100 text-gray-900 placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
          >
            <Search className="w-4 h-4" />
            Search Issues
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
