import type { GitHubIssue } from '@/types';

export const mockIssues: GitHubIssue[] = [
  {
    id: 1,
    number: 1,
    title: 'Bug in login',
    body: 'The login page is not working as expected',
    state: 'open',
    created_at: '2021-01-01',
    updated_at: '2021-01-01',
    html_url: 'https://github.com/facebook/react/issues/1',
    user: {
      login: 'facebook',
      avatar_url: 'https://github.com/facebook.png',
    },
    labels: [
      {
        id: 'ASD123',
        name: 'bug',
        color: 'red',
      },
      {
        id: 'ABC124',
        name: 'frontend',
        color: 'blue',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: 'Feature request: Add a new feature',
    body: 'We need to add a new feature to the product',
    state: 'closed',
    created_at: '2022-01-01',
    updated_at: '2022-02-01',
    html_url: 'https://github.com/facebook/react/issues/2',
    user: {
      login: 'facebook',
      avatar_url: 'https://github.com/facebook.png',
    },
    labels: [
      {
        id: 'BCD123',
        name: 'feature',
        color: 'green',
      },
    ],
  },
];
