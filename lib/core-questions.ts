export const VOLUME_OPTIONS = [
  { id: "light", label: "Quick skim (about 10 items)", itemsPerDay: 10 },
  { id: "standard", label: "Standard (about 20 items)", itemsPerDay: 20 },
  { id: "deep", label: "Deep dive (about 40 items)", itemsPerDay: 40 },
] as const;

export const EXPOSURE_OPTIONS = [
  { id: "focused", label: "Stick to my topics", stretchRatio: 0.1 },
  { id: "balanced", label: "Mostly mine, some surprises", stretchRatio: 0.3 },
  { id: "explore", label: "Surprise me", stretchRatio: 0.5 },
] as const;