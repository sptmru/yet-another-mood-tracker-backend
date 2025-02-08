export const MoodDefinition = {
  $id: 'Mood',
  type: 'object',
  properties: {
    id: { type: 'string' },
    date: { type: 'string' },
    rating: { type: 'number' },
    description: { type: 'string' },
    reasons: {
      type: 'array',
      items: {
        $ref: 'Reason#',
      },
    },
    createdAt: { type: 'string' },
  },
  required: ['date', 'rating'],
};

export const MoodWithoutReasonsDefinition = {
  $id: 'MoodWithoutReasons',
  type: 'object',
  properties: {
    id: { type: 'string' },
    date: { type: 'string' },
    rating: { type: 'number' },
    description: { type: 'string' },
    createdAt: { type: 'string' },
  },
  required: ['date', 'rating'],
};

export const UpdateMoodDTODefinition = {
  $id: 'UpdateMoodDTO',
  type: 'object',
  properties: {
    date: { type: 'string' },
    rating: { type: 'number' },
    description: { type: 'string' },
    reasonIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: [],
};
