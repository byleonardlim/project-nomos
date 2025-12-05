export const featuresContent = {
  heading: 'Built for Business Owners, not "Citizen Developers".',
  description:
    "You didn't start a business to debug API connections. Nomologi translates your plain English instructions into powerful, self-healing workflows with minimal intervention.",
  cards: [
    {
      title: 'Zero-Setup Delegation',
      body: 'Forget dragging nodes and mapping data fields. Just describe your goal in plain English, and Nomologi builds the entire backend for you. All you just need to provide are the keys and permissions',
    },
    {
      title: 'Smart Executions',
      body: "Nomologi doesn't just copy-paste. It understands nuance—like reading an email's tone before deciding if it's a lead or a complaint.",
    },
    {
      title: 'Self-Healing Reliability',
      body: 'When delegation fails, Nomologi fixes the connection automatically or alerts you in plain English. No silent failures, no lost leads, getting it fixed regardless of which device you are on.',
    },
  ],
} as const;

export type FeaturesContent = typeof featuresContent;
