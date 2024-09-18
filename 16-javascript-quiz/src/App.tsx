import { Button, Container, Stack, Typography } from '@mui/material';
import useQuestionsStore from './store/questions';
import Game from './components/Game';
import TypeScriptLogo from './components/TypeScriptLogo';

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
          marginBottom={2}
        >
          <TypeScriptLogo />
          <Typography variant='h3' component='h1'>
            TypeScript Quiz
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
