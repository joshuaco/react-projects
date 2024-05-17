import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';

export type Language = keyof typeof SUPPORTED_LANGUAGES; // [es,en,de,fr]
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

// interface is better for objects
export interface TranslatorState {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  isLoading: boolean;
}

export enum SectionType {
  From = 'from',
  To = 'to'
}
