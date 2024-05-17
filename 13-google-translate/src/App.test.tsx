import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('My App works and translate as expected', async () => {
  const user = userEvent.setup();

  const app = render(<App />);
  const textareaFrom = app.getByPlaceholderText('Introducir texto');

  user.type(textareaFrom, 'Hola mundo');

  await expect(textareaFrom).toBeTruthy();
  const result = await app.findByDisplayValue(
    /Hello world/i,
    {},
    { timeout: 3000 }
  );

  expect(result).toBeTruthy();
});
