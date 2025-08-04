import { useParams } from 'react-router';
import { useIssue } from '@/hooks/useIssue';
import IssueDetails from '@/components/issue-details';

function IssuePage() {
  const params = useParams();
  const { queryIssue } = useIssue(+params.id!);

  return (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
      {queryIssue.isLoading ? (
        <p>Loading...</p>
      ) : (
        queryIssue.data && <IssueDetails issue={queryIssue.data} />
      )}
    </div>
  );
}

export default IssuePage;
