import type { GitHubIssue } from '@/types';

interface IssueCardProps {
  issue: GitHubIssue;
}

function IssueCard({ issue }: IssueCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200">
            <img
              src={issue.user.avatar_url}
              alt={issue.user.login}
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">
              {issue.title}
            </span>
            <span className="text-xs text-gray-500">
              {new Date(issue.created_at).toLocaleDateString('en-US', {
                timeZone: 'UTC',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueCard;
