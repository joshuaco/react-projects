import { Card, TextInput, Title, Button, Badge } from '@tremor/react';
import { useUserActions } from '../hooks/useUserActions';
import { useState } from 'react';

function CreateUser() {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<'ok' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResult(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const github = formData.get('github') as string;

    if (!name || !email || !github) {
      setResult('error');
      return;
    }

    addUser({ name, email, github });
    setResult('ok');
    form.reset();
  };

  return (
    <Card className='mt-4'>
      <Title>Create User</Title>

      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <TextInput placeholder='Name' name='name' />
        <TextInput placeholder='Email' name='email' />
        <TextInput placeholder='Github Username' name='github' />

        <div>
          <Button className='w-3/12' type='submit'>
            Create
          </Button>
          <span className='mx-4'>
            {result === 'ok' && <Badge color='green'>User created!</Badge>}
            {result === 'error' && (
              <Badge color='red'>Input fields are required</Badge>
            )}
          </span>
        </div>
      </form>
    </Card>
  );
}

export default CreateUser;
