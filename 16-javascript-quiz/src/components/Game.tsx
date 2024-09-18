import {
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { Question as QuestionType } from '../types';
import useQuestionsStore from '../store/questions';
import CodeHighlight from './CodeHighlight';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Footer from './Footer';

const getBackgroundColor = (index: number, question: QuestionType) => {
  const { userAnswer, respuesta } = question;

  // User doesn't answered the question yet
  if (userAnswer == null) return 'transparent';
  // index has the correct answer
  if (index === respuesta) return 'green';
  // index has the wrong answer
  if (index === userAnswer) return 'red';

  return 'transparent';
};

function Question({ question }: { question: QuestionType }) {
  const selectedAnswer = useQuestionsStore((state) => state.selectedAnswer);

  const handleClick = (index: number) => () => {
    selectedAnswer(question.id, index);
  };

  return (
    <CardContent>
      <Typography variant='h6' gutterBottom>
        {question.pregunta}
      </Typography>

      {question.codigo && <CodeHighlight code={question.codigo} />}

      <List sx={{ width: '100%', bgcolor: '#f5f5f5' }} disablePadding>
        {question.opciones.map((option, index) => (
          <ListItem key={index} divider disablePadding>
            <ListItemButton
              onClick={handleClick(index)}
              disabled={question.userAnswer != null}
              sx={{ backgroundColor: getBackgroundColor(index, question) }}
            >
              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CardContent>
  );
}

function Game() {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const toPreviousQuestion = useQuestionsStore(
    (state) => state.toPreviousQuestion
  );
  const toNextQuestion = useQuestionsStore((state) => state.toNextQuestion);

  const questionInfo = questions[currentQuestion];

  return (
    <Stack direction='column' gap={2}>
      <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
        <IconButton
          disabled={currentQuestion === 0}
          onClick={toPreviousQuestion}
        >
          <ArrowBackIosNew />
        </IconButton>

        <Typography>
          {currentQuestion + 1} / {questions.length}
        </Typography>

        <IconButton
          disabled={currentQuestion === questions.length - 1}
          onClick={toNextQuestion}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
      <Card variant='outlined'>
        <Question question={questionInfo} />
      </Card>
      <Footer />
    </Stack>
  );
}

export default Game;
