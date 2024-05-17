import { AUTO_LANGUAGE } from '../constants';
import { FromLanguage, Language, TranslatorState } from '../types';

// 2. Create actions type
export type TranslatorActions =
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_FROM_LANGUAGE'; payload: { language: FromLanguage } }
  | { type: 'SET_TO_LANGUAGE'; payload: { language: Language } }
  | { type: 'SET_FROM_TEXT'; payload: { text: string } }
  | { type: 'SET_RESULT'; payload: { text: string } };

// 1. Create an initial state
export const initialState: TranslatorState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  isLoading: false
};

// 3. Create a reducer
export const translatorReducer = (
  state: TranslatorState = initialState,
  action: TranslatorActions
) => {
  if (action.type === 'INTERCHANGE_LANGUAGES') {
    if (
      state.fromLanguage === AUTO_LANGUAGE ||
      state.fromLanguage === state.toLanguage
    )
      return state;

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      fromText: state.result,
      result: '',
      isLoading: true
    };
  }

  if (action.type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload.language) return state;

    const isLoading = state.fromText !== '';

    return {
      ...state,
      fromLanguage: action.payload.language,
      result: '',
      isLoading
    };
  }

  if (action.type === 'SET_TO_LANGUAGE') {
    const isLoading = state.fromText !== '';

    return {
      ...state,
      toLanguage: action.payload.language,
      result: '',
      isLoading
    };
  }

  if (action.type === 'SET_FROM_TEXT') {
    // if { payload: { text } } is '', return false
    const isLoading = action.payload.text !== '';

    return {
      ...state,
      isLoading,
      result: '',
      fromText: action.payload.text
    };
  }

  if (action.type === 'SET_RESULT') {
    return {
      ...state,
      isLoading: false,
      result: action.payload.text
    };
  }

  return state;
};
