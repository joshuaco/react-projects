// 2. Create action types
export type TranslatorActions = { type: 'INTERCHANGE_LANGUAGES' };

// 1. Create an initial state
export const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  isloading: false
};

// 3. Create a reducer
export const translatorReducer = (
  state: typeof initialState,
  action: TranslatorActions
) => {
  if (action.type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    };
  }

  return state;
};
