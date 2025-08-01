import { GitBranch } from 'lucide-react';

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <GitBranch className="w-16 h-16 text-gray-400 mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No issues loaded
      </h3>
      <p className="text-gray-500 max-w-md mx-auto">
        Enter a repository name above to start tracking GitHub issues
      </p>
    </div>
  );
}

export default EmptyState;
