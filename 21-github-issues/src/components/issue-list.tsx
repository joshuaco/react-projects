import type { GitHubIssue } from '@/types';
import IssueCard from './issue-card';

interface Props {
  issues: GitHubIssue[];
}

function IssueList({ issues }: Props) {
  return (
    <div className='space-y-4'>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueList;
