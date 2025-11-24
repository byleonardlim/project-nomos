export const earlyAccessContent = {
  heading: 'Help shape the first version.',
  description:
    'Were inviting a small group of teams to experiment with Nomos as we refine the builder, the review loop, and integrations.',
  bullets: [
    'Monthly product sessions where we walk through real workflows and gaps.',
    'Early access to new capabilities in exchange for honest feedback.',
    'A direct line to the team building Nomologi.',
  ],
  panel: {
    heading: 'Join the early interest list',
    description:
      'Share a bit about your team, stack, and current automation challenges. We\'ll follow up with next steps and potential fit for the early program.',
    button: 'Join Nomologi Waitlist',
  },
} as const;

export type EarlyAccessContent = typeof earlyAccessContent;
