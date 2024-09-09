export interface User {
  id: string;
  name: string;
  email: string;
  github: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Viola Amherd',
    email: 'viola@amherd.com',
    github: 'viola-amherd'
  },
  {
    id: '2',
    name: 'Joshua Contreras',
    email: 'joshua@gmail.com',
    github: 'joshuaco'
  },
  {
    id: '3',
    name: 'Josh Adams',
    email: 'josh@joshadams.com',
    github: 'joshadams'
  }
];
