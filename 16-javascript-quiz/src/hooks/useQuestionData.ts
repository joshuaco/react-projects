import useQuestionsStore from '../store/questions';

export function useQuestionData() {
  const questions = useQuestionsStore((state) => state.questions);

  let correct = 0;
  let wrong = 0;

  questions.forEach((question) => {
    if (question.userAnswer == null) return;
    if (question.isCorrect) {
      correct++;
    }
    if (!question.isCorrect) {
      wrong++;
    }
  });

  return { correct, wrong };
}
