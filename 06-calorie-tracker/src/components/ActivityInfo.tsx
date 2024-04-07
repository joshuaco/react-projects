import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Activity } from '../types';

type ActivityInfoProps = {
  activity: Activity;
  categoryName: (category: Activity['category']) => string[];
  handleEdit: (activityId: Activity['id']) => void;
  handleDelete: (activityId: Activity['id']) => void;
};

function ActivityInfo({
  activity,
  categoryName,
  handleEdit,
  handleDelete
}: ActivityInfoProps) {
  const colorCategory = activity.category === 1;

  return (
    <article
      key={activity.id}
      className="px-5 py-10 rounded shadow bg-white mt-5 flex justify-between"
    >
      <div className="space-y-2 relative">
        <p
          className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${
            colorCategory ? 'bg-lime-500' : 'bg-orange-500'
          }`}
        >
          {categoryName(activity.category)}
        </p>
        <p className="text-2xl font-bold pt-5">{activity.name}</p>
        <p
          className={`font-black text-4xl ${
            colorCategory ? 'text-lime-500' : 'text-orange-500'
          }`}
        >
          {activity.calories} {''}
          <span>Calories</span>
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <button onClick={() => handleEdit(activity.id)}>
          <PencilSquareIcon className="w-8 h-8 text-slate-600" />
        </button>

        <button onClick={() => handleDelete(activity.id)}>
          <TrashIcon className="w-8 h-8 text-slate-600" />
        </button>
      </div>
    </article>
  );
}

export default ActivityInfo;
