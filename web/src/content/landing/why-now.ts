export const whyNowContent = {
  tagline: 'Automation today feels like work about work',
  title: 'Stitched-together automations are fragile, opaque, and hard to evolve.',
  description:
    'Most automation tools grew out of spreadsheets and webhooks. You end up with a maze of brittle zaps, unowned workflows, and a backlog of "quick fixes" that no one fully understands.',
  struggles: [
    {
      label: 'Struggle #1',
      iconKey: 'bug',
      text: 'Debugging means clicking through many tools and replaying events by hand.',
    },
    {
      label: 'Struggle #2',
      iconKey: 'alert',
      text: 'Ownership is unclear. When something breaks, everyone is on-call and no one owns it.',
    },
    {
      label: 'Struggle #3',
      iconKey: 'workflow',
      text: 'Simple changes require tickets, meetings, and risky edits to a house-of-cards setup.',
    },
  ],
} as const;

export type WhyNowContent = typeof whyNowContent;
