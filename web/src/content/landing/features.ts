export const featuresContent = {
  heading: 'Designed for real teams, not dev teams.',
  description:
    'Three guiding principles: keep flows readable, keep integrations flexible, and keep you in control of what ships.',
  cards: [
    {
      title: 'Plain-language flows',
      body: 'Forget node graphs. Nomologi turns your business tasks into short, readable steps that anyone can understand. If you can describe it in a sentence, you can automate it.',
    },
    {
      title: 'LLM-native actions',
      body: 'Describe the outcome you want. Connect your tools. Nomologi writes the glue, handles the logic, and fills in the tedious parts — safely, transparently, and reviewable at every step. Your intent becomes automation. No manuals required.',
    },
    {
      title: 'Safe to ship',
      body: 'Ship with confidence. Nomologi gives you a review layer where you can inspect, tweak, and validate every step before it touches live production systems. Automation that’s reliable, predictable, and built for real work — not experiments.',
    },
  ],
} as const;

export type FeaturesContent = typeof featuresContent;
