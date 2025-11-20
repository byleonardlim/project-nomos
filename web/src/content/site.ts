export const siteContent = {
  brand: {
    name: 'Nomologi',
  },
  meta: {
    title: 'Nomologi – Simplifying automation for modern busy people',
    description: 'Nomologi makes automation simple, opinionated, and collaborative for modern teams.',
  },
  urls: {
    tallyInterest: 'https://tally.so/r/your-form-id',
  },
  footer: {
    slogan: 'Built for teams who are tired of fighting their automation tools.',
  },
} as const;

export type SiteContent = typeof siteContent;
