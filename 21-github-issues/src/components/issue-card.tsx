import { Link } from 'react-router';
import { formatCodeElements } from '@/utils/text-formatter';
import { CircleDot, MessageSquare } from 'lucide-react';
import type { GitHubIssue } from '@/types';

interface IssueCardProps {
  issue: GitHubIssue;
}

function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex justify-between gap-2 items-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5">
            {issue.state === 'open' && (
              <CircleDot className="text-green-600 w-5 h-5" />
            )}
          </div>
          <div className="flex flex-col">
            <Link
              to={`/issue/${issue.number}`}
              className="text-sm font-medium text-gray-900"
            >
              {formatCodeElements(issue.title)}
            </Link>
            <div>
              <span className="text-xs text-gray-500">#{issue.number}</span>{' '}
              <span className="text-xs text-gray-500 font-semibold">
                {issue.user.login}
              </span>{' '}
              <span className="text-xs text-gray-500">opened at</span>{' '}
              <span className="text-xs text-gray-500">
                {new Date(issue.created_at).toLocaleDateString('en-US', {
                  timeZone: 'UTC',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center gap-1.5 hidden md:flex lg:mr-3">
        <MessageSquare className="w-5 h-5 text-gray-500" />
        <span className="text-gray-500 text-sm">{issue.comments}</span>
      </div>
    </div>
  );
}

export default IssueCard;
