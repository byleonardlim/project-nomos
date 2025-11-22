export const featuresContent = {
  heading: 'What makes Nomologi unique',
  description:
    'Nomologi gives product, ops, and engineering one place to design, review, and run automations so everyone shares the same picture of how work actually happens.',
  cards: [
    {
      title: 'Process-first, not trigger-first',
      body:
        'Most tools start from a trigger and ask you to bolt a workflow on top. Nomologi flips that. You begin by modelling the real process as it lives in your organisation today — the actors involved, the states a request moves through, the approvals and escalations that actually happen, and the awkward edge cases people usually handle in Slack or spreadsheets. Once the process is clear, you wire tools, events, and APIs to each step. The model becomes a single source of truth for how work should flow across teams, not just how the automation fires. This makes it easier to onboard new teammates, reason about change, and keep human steps, manual overrides, and exception handling in the same picture as your fully automated paths.',
    },
    {
      title: 'Product-grade change management',
      body:
        'Changing an automation should feel as safe and deliberate as shipping a product release. In Nomologi, every flow lives in versions with clear history, owners, and comments. You can propose changes to a live process without touching production, share a draft with collaborators, and collect feedback before anything rolls out. When you are ready, you review a human-readable diff that shows exactly what will change — conditions, branches, integrations, and copy — so there are no surprises. Approvals, rollout strategies, and rollback options are built in, meaning your stakeholders never have to guess what changed or why. Instead of fragile, one-off edits that only one person understands, you get a reviewable, auditable trail for every modification to how work moves through your organisation.',
    },
    {
      title: 'Built-in observability and ownership',
      body:
      	'When something breaks in an automation, the hardest question is often simply: what happened, and who owns it? Nomologi tracks every run as a first-class object with full context — inputs, decisions taken at each step, linked systems, and the humans involved along the way. Instead of hopping between dashboards or asking around for screenshots, you can open a single run and replay the journey from start to finish. Ownership is explicit: each flow and key step has clear owners, making incidents easier to route and faster to resolve. Over time, aggregated metrics, failure patterns, and resolution notes help you harden your processes where they are most fragile. The result is not just fewer incidents, but a shared understanding of how work actually behaves in the wild, not just how it looks in a diagram.',
    },
  ],
} as const;

export type FeaturesContent = typeof featuresContent;
