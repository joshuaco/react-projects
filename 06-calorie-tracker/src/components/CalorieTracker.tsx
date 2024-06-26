import { useMemo } from 'react';
import CalorieDisplay from './CalorieDisplay';
import { useActivity } from '../hooks/useActivity';

function CalorieTracker() {
  const { state } = useActivity();
  const { activities } = state;

  // Calculating calories
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-white text-center">
        Calorie Summary
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">
        <CalorieDisplay calories={caloriesConsumed} text="Consumed" />
        <CalorieDisplay calories={caloriesBurned} text="Burned" />
        <CalorieDisplay
          calories={caloriesConsumed - caloriesBurned}
          text="Total"
        />
      </div>
    </>
  );
}

export default CalorieTracker;
