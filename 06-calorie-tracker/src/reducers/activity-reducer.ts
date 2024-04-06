import { Activity } from '../types';

// informacion que va a modificar el estado
export type ActivityActions = {
  type: 'save-activity';
  payload: { newActivity: Activity };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: []
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    // Código para manejar la lógica para actualizar el state

    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity]
    };
  }

  return state;
};
