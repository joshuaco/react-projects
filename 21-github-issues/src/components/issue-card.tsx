import { Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { formatCodeElements } from '@/utils/text-formatter';
import { CircleDot, CircleCheck, MessageSquare } from 'lucide-react';

import type { GitHubIssue } from '@/types';

interface IssueCardProps {
  issue: GitHubIssue;
}

function IssueCard({ issue }: IssueCardProps) {
  const queryClient = useQueryClient();

  // Preload issue data into React Query cache when user hovers over the card
  const presetData = () => {
    queryClient.setQueryData(['issue', issue.number], issue, {
      updatedAt: Date.now() + 1000 * 60
    });
  };

  return (
    <div
      className='bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex justify-between gap-2 items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white'
      onMouseEnter={presetData}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <div className='w-5 h-5'>
            {issue.state === 'open' ? (
              <CircleDot className='text-green-600 w-5 h-5' />
            ) : (
              <CircleCheck className='text-purple-600 w-5 h-5' />
            )}
          </div>
          <div className='flex flex-col flex-1'>
            <Link
              to={`/issue/${issue.number}`}
              className='text-sm font-medium text-gray-900 text-ellipsis dark:text-gray-100'
            >
              {formatCodeElements(issue.title)}
            </Link>
            <div className='flex flex-wrap items-center gap-2 mt-1'>
              <div>
                <span className='text-xs text-gray-500'>#{issue.number}</span>{' '}
                <span className='text-xs text-gray-500 font-semibold'>
                  {issue.user.login}
                </span>{' '}
                <span className='text-xs text-gray-500'>opened at</span>{' '}
                <span className='text-xs text-gray-500'>
                  {new Date(issue.created_at).toLocaleDateString('en-US', {
                    timeZone: 'UTC'
                  })}
                </span>
              </div>
              {issue.labels && issue.labels.length > 0 && (
                <div className='flex flex-wrap gap-1'>
                  {issue.labels.slice(0, 3).map((label) => (
                    <span
                      key={label.id}
                      className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border text-gray-800 dark:text-gray-200'
                      style={{
                        backgroundColor: `#${label.color}40`,
                        borderColor: `#${label.color}60`
                      }}
                    >
                      {label.name}
                    </span>
                  ))}
                  {issue.labels.length > 3 && (
                    <span className='text-xs text-gray-500'>
                      +{issue.labels.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='items-center gap-1.5 hidden md:flex lg:mr-3'>
        <MessageSquare className='w-5 h-5 text-gray-500' />
        <span className='text-gray-500 text-sm'>{issue.comments}</span>
      </div>
    </div>
  );
}

export default IssueCard;
