import { create } from 'zustand';
import { Question } from '../types';

interface QuestionsState {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: () => Promise<void>;
  selectedAnswer: (questionID: number, userAnswer: number) => void;
  toNextQuestion: () => void;
  toPreviousQuestion: () => void;
}

const useQuestionsStore = create<QuestionsState>((set, get) => ({
  questions: [],
  currentQuestion: 0,

  fetchQuestions: async () => {
    const response = await fetch('/data.json');
    const data = await response.json();

    const questions = data.quizz.sort(() => Math.random() - 0.5);
    set({ questions });
  },

  selectedAnswer: (questionID: number, userAnswer: number) => {
    const { questions } = get();
    const newQuestions = structuredClone(questions);
    // Find the question index
    const questionIndex = newQuestions.findIndex((q) => q.id === questionID);
    // Get the question info
    const questionInfo = newQuestions[questionIndex];
    // Find if the user answer is correct
    const isCorrectUserAnswer = questionInfo.respuesta === userAnswer;
    // Change the copied questions array
    newQuestions[questionIndex] = {
      ...questionInfo,
      userAnswer,
      isCorrect: isCorrectUserAnswer
    };
    // Update the questions state
    set({ questions: newQuestions });
  },

  toNextQuestion: () => {
    const { questions, currentQuestion } = get();
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion <= questions.length - 1) {
      set({ currentQuestion: nextQuestion });
    }
  },
  toPreviousQuestion: () => {
    const { currentQuestion } = get();
    const previousQuestion = currentQuestion - 1;

    if (currentQuestion > 0) {
      set({ currentQuestion: previousQuestion });
    }
  }
}));

export default useQuestionsStore;
