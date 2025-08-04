import { GitBranch } from 'lucide-react';

function Header() {
  return (
    <header className="px-6 py-5">
      <div className="flex items-center gap-2">
        <GitBranch className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          GitHub Issue Tracker
        </h1>
      </div>
      <p className="text-sm md:text-base text-gray-500 mt-2">
        Track and manage GitHub issues from any public repository
      </p>
    </header>
  );
}

export default Header;
