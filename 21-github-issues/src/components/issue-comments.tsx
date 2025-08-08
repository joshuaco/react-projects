import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import type { GitHubComment } from '@/types';

interface Props {
  comments: GitHubComment[];
}

function IssueComments({ comments }: Props) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No comments yet</div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow overflow-x-auto"
        >
          <img
            src={comment.user.avatar_url}
            alt={comment.user.login}
            className="w-10 h-10 rounded-full flex-shrink-0 ring-2 ring-gray-100"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <h3 className="font-medium text-gray-900">
                {comment.user.login}
              </h3>
              <time className="text-sm text-gray-500 flex-shrink-0">
                {formatDistanceToNow(new Date(comment.created_at), {
                  addSuffix: true,
                })}
              </time>
            </div>
            <div className="markdown-content text-gray-700 text-sm leading-relaxed">
              <ReactMarkdown>
                {comment.body || 'No comment provided.'}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IssueComments;
