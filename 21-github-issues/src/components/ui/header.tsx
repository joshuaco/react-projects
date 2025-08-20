import { GitBranch } from 'lucide-react';
import ThemeToggle from './theme-toggle';

function Header() {
  return (
    <header className='px-6 py-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <GitBranch className='w-8 h-8 text-blue-500' />
          <h1 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white'>
            GitHub Issue Tracker
          </h1>
        </div>
        <ThemeToggle />
      </div>
      <p className='text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2'>
        Track and manage GitHub issues from any public repository
      </p>
    </header>
  );
}

export default Header;
