import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useActivity } from '../hooks/useActivity';
import { categories } from '../data/category';
import { v4 as uuidv4 } from 'uuid';
import type { Activity } from '../types';

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
};

function Form() {
  const [activity, setActivity] = useState<Activity>(initialState);
  const { state, dispatch } = useActivity();

  useEffect(() => {
    if (state.activeID) {
      const selectedActivity = state.activities.filter(
        (act) => act.id === state.activeID
      )[0];
      setActivity(selectedActivity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeID]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === ' ') return;
    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'save-activity', payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4()
    });
  };

  const isValidActivity = () => {
    return activity.name.trim() !== '' && activity.calories > 0;
  };

  return (
    <form
      className="space-y-5 bg-white rounded shadow p-10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label className="text-xl font-bold" htmlFor="category">
          Category:
        </label>
        <select
          className="border border-slate-300 p-2 rounded w-full bg-white outline-none"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="text-xl font-bold">
          Activity:
        </label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 rounded p-2 outline-amber-800"
          placeholder="Ex. Food, Orange Juice, Salad, Training, Lifting, Running"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="text-xl font-bold">
          Calories:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 rounded p-2 outline-amber-800"
          placeholder="Ex. 500, 350, 100"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-amber-700 hover:bg-amber-900 w-full p-2 font-bold uppercase text-slate-50 rounded cursor-pointer disabled:opacity-40 disabled:cursor-default"
        value={activity.category === 1 ? 'Save Food' : 'Save Routine'}
        disabled={!isValidActivity()}
      />
    </form>
  );
}

export default Form;
