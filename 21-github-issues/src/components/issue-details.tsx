import { formatCodeElements } from '@/utils/text-formatter';
import { formatDistanceToNow } from 'date-fns';
import { CircleDot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import type { GitHubIssue } from '@/types';

interface Props {
  issue: GitHubIssue;
}

function IssueDetails({ issue }: Props) {
  return (
    <>
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 pb-2 border-b border-gray-200">
        <div>
          <h2 className="font-semibold text-lg md:text-2xl text-gray-900">
            {formatCodeElements(issue.title)}{' '}
            <span className="text-gray-500 font-light">#{issue.number}</span>
          </h2>
          <div className="flex gap-2 mt-2 items-center">
            <img
              src={issue.user.avatar_url}
              alt={issue.user.login}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm text-gray-500">
              Created by{' '}
              <span className="font-semibold">{issue.user.login}</span>
              {' • '}
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
              })}
            </span>
            <div className="flex md:hidden items-center gap-1 px-2 py-1.5 rounded-xl bg-green-600">
              <CircleDot className="text-white w-5 h-5" />
              <span className="text-white font-medium">Open</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-xl bg-green-600">
          <CircleDot className="text-white w-5 h-5" />
          <span className="text-white font-medium">Open</span>
        </div>
      </header>
      <section className="mt-2 markdown-content px-4 py-2 text-gray-700 leading-relaxed overflow-x-auto">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {issue.body || 'No description provided.'}
        </ReactMarkdown>
      </section>
    </>
  );
}

export default IssueDetails;
