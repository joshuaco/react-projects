import { Todos } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getTodos() {
  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${API_KEY}/latest`
    );
    const {
      record: { todos }
    } = await response.json();

    return todos;
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function updateTodoToBin(todo: Todos[]) {
  try {
    await fetch(`https://api.jsonbin.io/v3/b/${API_KEY}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todos: todo })
    });
  } catch (e) {
    throw new Error(e as string);
  }
}
