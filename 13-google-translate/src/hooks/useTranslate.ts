import { useReducer } from 'react';
import {
  initialState,
  translatorReducer
} from '../reducers/translator-reducer';
import { FromLanguage, Language } from '../types';

export function useTranslate() {
  // 4. Call the reducer using useReducer
  const [state, dispatch] = useReducer(translatorReducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' });
  };

  const setFromLanguage = (language: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload: { language } });
  };

  const setToLanguage = (language: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload: { language } });
  };

  const setFromText = (text: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload: { text } });
  };

  const setResult = (text: string) => {
    dispatch({ type: 'SET_RESULT', payload: { text } });
  };

  return {
    fromLanguage: state.fromLanguage,
    toLanguage: state.toLanguage,
    fromText: state.fromText,
    result: state.result,
    isLoading: state.isLoading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  };
}
