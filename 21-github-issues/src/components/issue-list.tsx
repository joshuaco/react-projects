import { mockIssues } from '@/data/mock-data';
import IssueCard from './issue-card';

function IssueList() {
  return (
    <div className="space-y-4">
      {mockIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssueList;
