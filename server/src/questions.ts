export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  title: string;
  codeExample: string;
  answers: Answer[];
  correctAnswerId: string;
}

export const questions = [
  {
    id: '001',
    title: 'This is the first question. Correct answer is "One"',
    codeExample: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    answers: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    correctAnswerId: '1',
  },
  {
    id: '002',
    title: 'This is the first question. Correct answer is "Two"',
    codeExample: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    answers: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    correctAnswerId: '2',
  },
  {
    id: '003',
    title: 'This is the first question. Correct answer is "Three"',
    codeExample: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    answers: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    correctAnswerId: '3',
  },
];
