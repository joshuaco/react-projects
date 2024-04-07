import { Dispatch, useMemo } from 'react';
import { Activity } from '../types';
import { categories } from '../data/category';
import { ActivityActions } from '../reducers/activity-reducer';
import ActivityInfo from './ActivityInfo';

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

function ActivityList({ activities, dispatch }: ActivityListProps) {
  const hasActivity = activities.length > 0;

  const categoryName = useMemo(
    () => (category: Activity['category']) => {
      // Here I can do some other stuff, like console logging.

      return categories.map((cat) =>
        cat.id === category ? cat.name.split(' ')[1] : ''
      );
    },
    []
  );

  const handleEdit = (activityId: Activity['id']) => {
    dispatch({ type: 'set-activeID', payload: { id: activityId } });
  };

  const handleDelete = (activityId: Activity['id']) => {
    dispatch({ type: 'delete-activity', payload: { id: activityId } });
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Food & Activities
      </h2>

      {hasActivity ? (
        activities.map((activity) => (
          <ActivityInfo
            key={activity.id}
            activity={activity}
            categoryName={categoryName}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-xl my-5 font-bold text-slate-600 text-center">
          No Activities yet...
        </p>
      )}
    </>
  );
}

export default ActivityList;
