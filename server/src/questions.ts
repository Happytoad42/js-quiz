export interface Answer {
  id: string;
  text: string;
}

export interface Description {
  text: string;
  code?: string | undefined;
}

export interface Question {
  id: string;
  title: string;
  codeExample: string;
  variants: Answer[];
  description: Description;
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
    variants: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    description: {
      text: 'Some description text here',
      code: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    },
    correctAnswerId: '1',
  },
  {
    id: '002',
    title: 'This is the second question. Correct answer is "Two"',
    codeExample: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    variants: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    description: {
      text: 'Some description text here',
      code: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    },
    correctAnswerId: '2',
  },
  {
    id: '003',
    title: 'This is the third question. Correct answer is "Three"',
    codeExample: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    variants: [
      { id: '1', text: 'One' },
      { id: '2', text: 'Two' },
      { id: '3', text: 'Three' },
      { id: '4', text: 'One' },
    ],
    description: {
      text: 'Some description text here',
      code: `
    const foo = 'foo';
    const bar = 'bar';
    console.log(foo + bar);
    `,
    },
    correctAnswerId: '3',
  },
];
