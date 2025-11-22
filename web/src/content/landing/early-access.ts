export const earlyAccessContent = {
  heading: 'Help shape Nomologi from the beginning.',
  description:
    'We\'re working closely with a small set of early teams. If you care about automation as a core capability — not a side project — we\'d love to build with you.',
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
