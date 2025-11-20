export const URLS = {
  tallyInterest: 'https://tally.so/r/your-form-id', // TODO: replace with real Tally URL
};

export const COPY = {
  brand: {
    name: 'Nomologi',
  },
  meta: {
    title: 'Nomologi \u2013 Simplifying automation for modern busy people',
    description: 'Nomologi makes automation simple, opinionated, and collaborative for modern teams.',
  },
  struggles: {
    tagline: 'Automation today feels like work about work',
    title: 'Stitched-together automations are fragile, opaque, and hard to evolve.',
    description:
      'Most automation tools grew out of spreadsheets and webhooks. You end up with a maze of brittle zaps, unowned workflows, and a backlog of "quick fixes" that no one fully understands.',
    points: [
      'Debugging means clicking through many tools and replaying events by hand.',
      'Ownership is unclear. When something breaks, everyone is on-call and no one owns it.',
      'Simple changes require tickets, meetings, and risky edits to a house-of-cards setup.',
    ],
  },
  hero: {
    title: 'Automation made easy, opinionated, and reliable.',
    description:
      'Nomologi is an automation builder for teams who want clarity instead of chaos. Model your real processes, collaborate on changes, and ship automations that are auditable, testable, and owned.',
    ctaLabel: 'Join the early interest list',
    ctaFootnote:
      'No spam. We\u2019ll share early product access, patterns we\u2019re learning, and ask for your feedback on the roadmap.',
  },
  differentiators: {
    heading: 'What makes Nomologi different',
    description:
      'Built for product, ops, and engineering teams who care about reliability and shared understanding \u2014 not just "getting something to fire".',
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
  },
  earlyAccess: {
    heading: 'Help shape Nomologi from the beginning.',
    description:
      'We\u2019re working closely with a small set of early teams. If you care about automation as a core capability \u2014 not a side project \u2014 we\u2019d love to build with you.',
    bullets: [
      'Monthly product sessions where we walk through real workflows and gaps.',
      'Early access to new capabilities in exchange for honest feedback.',
      'A direct line to the team building Nomologi.',
    ],
    panel: {
      heading: 'Join the early interest list',
      description:
        'Share a bit about your team, stack, and current automation challenges. We\u2019ll follow up with next steps and potential fit for the early program.',
      button: 'Open Tally form',
      footnote:
        'Tally will open in a new tab. You can update the exact form URL later in src/lib/copy.ts.',
    },
  },
  footer: {
    slogan: 'Built for teams who are tired of fighting their automation tools.',
  },
} as const;
