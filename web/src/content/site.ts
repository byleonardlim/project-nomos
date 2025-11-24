export const siteContent = {
  brand: {
    name: 'Nomologi',
  },
  meta: {
    title: 'Nomologi – Automation that feels human. Power that feels simple.',
    description: 'Nomologi helps businesses build simple, effective automation without wrestling with complex tools.',
  },
  baseUrl: 'https://nomologi.com',
  urls: {
    tallyInterest: 'https://tally.so/r/your-form-id',
  },
  footer: {
    slogan: 'Built for businesses who are tired of fighting their automation tools.',
  },
} as const;

export type SiteContent = typeof siteContent;
