import { Check, Close, RestartAlt } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useQuestionData } from '../hooks/useQuestionData';
import useQuestionsStore from '../store/questions';

function Footer() {
  const reset = useQuestionsStore((state) => state.reset);
  const { correct, wrong } = useQuestionData();

  return (
    <footer style={{ marginTop: '32px' }}>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Check color='success' style={{ fontSize: '32px' }} />
        <Typography>Correct answers: {correct}</Typography>

        <Close color='error' style={{ fontSize: '32px' }} />
        <Typography>Wrong answers: {wrong}</Typography>
      </div>

      <div
        style={{ display: 'flex', marginTop: '16px', justifyContent: 'center' }}
      >
        <Button onClick={reset}>
          <RestartAlt />
          Reset
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
