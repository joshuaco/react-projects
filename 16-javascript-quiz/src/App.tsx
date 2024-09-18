import { Button, Container, Stack, Typography } from '@mui/material';
import useQuestionsStore from './store/questions';
import Game from './components/Game';
import JavaScriptLogo from './components/JavaScriptLogo';

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions();
  };

  return (
    <main>
      <Container maxWidth='md'>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='center'
          marginBottom={3}
        >
          <JavaScriptLogo />
          <Typography variant='h4' component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>

        <Stack direction='row' gap={2} justifyContent='center'>
          {questions.length === 0 && (
            <Button onClick={handleClick} variant='contained'>
              Start!
            </Button>
          )}
          {questions.length > 0 && <Game />}
        </Stack>
      </Container>
    </main>
  );
}

export default App;
