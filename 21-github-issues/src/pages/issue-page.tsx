import { useParams } from 'react-router';
import { useIssue } from '@/hooks/useIssue';
import IssueDetails from '@/components/issue-details';
import IssueComments from '@/components/issue-comments';

function IssuePage() {
  const params = useParams();
  const { queryIssue, queryComments } = useIssue(+params.id!);

  return (
    <>
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
        {queryIssue.isLoading ? (
          <p>Loading...</p>
        ) : (
          queryIssue.data && <IssueDetails issue={queryIssue.data} />
        )}
      </div>
      {queryComments.data && <IssueComments comments={queryComments.data} />}
    </>
  );
}

export default IssuePage;
