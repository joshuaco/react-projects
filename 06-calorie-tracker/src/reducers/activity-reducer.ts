import { Activity } from '../types';

// informacion que va a modificar el estado
export type ActivityActions =
  | {
      type: 'save-activity';
      payload: { newActivity: Activity };
    }
  | {
      type: 'set-activeID';
      payload: { id: Activity['id'] };
    }
  | {
      type: 'delete-activity';
      payload: { id: Activity['id'] };
    }
  | {
      type: 'restart-app';
    };

export type ActivityState = {
  activities: Activity[];
  activeID: Activity['id'];
};

const storageActivities = (): Activity[] => {
  const activities = localStorage.getItem('activities');
  return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
  activities: storageActivities(),
  activeID: ''
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    let updatedActivities: Activity[] = [];

    // Check if user is editing an activity
    if (state.activeID) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeID ? action.payload.newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }
    return {
      ...state,
      activities: updatedActivities,
      activeID: ''
    };
  }

  if (action.type === 'set-activeID') {
    return {
      ...state,
      activeID: action.payload.id
    };
  }

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      )
    };
  }

  if (action.type === 'restart-app') {
    return {
      activities: [],
      activeID: ''
    };
  }

  return state;
};
