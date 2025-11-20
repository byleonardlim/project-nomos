export const productContent = {
  heading: 'What makes Nomologi different',
  description:
    'Built for product, ops, and engineering teams who care about reliability and shared understanding — not just "getting something to fire".',
  cards: [
    {
      title: 'Process-first modeling',
      body:
        'Model end-to-end flows as living documents instead of scattered zaps. See every step, dependency, and owner in one place.',
    },
    {
      title: 'Collaboration built-in',
      body:
        'Review changes, comment on edge cases, and capture decisions so future you knows why a flow behaves the way it does.',
    },
    {
      title: 'Observability from day one',
      body:
        'Trace every run, inspect payloads, and spot regressions before customers feel them. Debug flows like you debug code.',
    },
  ],
} as const;

export type ProductContent = typeof productContent;
